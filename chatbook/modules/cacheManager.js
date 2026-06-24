/**
 * 데이터 캐시 매니저 - 필터링된 데이터 캐싱
 */

const CacheManager = (() => {
    let cache = new Map();
    let filterCache = new Map();

    // 캐시 키 생성
    const generateCacheKey = (filter) => {
        if (!filter) return 'all';
        return `${filter.start || 'start'}_${filter.end || 'end'}_${filter.keyword || 'keyword'}`;
    };

    // 필터링 결과 캐싱
    const getFilteredData = (data, filter) => {
        const key = generateCacheKey(filter);
        
        if (filterCache.has(key)) {
            return filterCache.get(key);
        }

        const filtered = data.filter(item => {
            if (!filter || Object.keys(filter).length === 0) return true;
            
            const timestamps = Array.isArray(item.messageTimes) && item.messageTimes.length > 0
                ? item.messageTimes
                : (item.createTime ? [item.createTime] : []);
            
            if (timestamps.length === 0) return false;

            return timestamps.some(ts => {
                const date = new Date(ts * 1000);
                if (Number.isNaN(date.getTime())) return false;
                if (filter.start && date < filter.start) return false;
                if (filter.end && date > filter.end) return false;
                return true;
            });
        });

        filterCache.set(key, filtered);
        return filtered;
    };

    // 통계 데이터 캐싱
    const getStats = (cacheKey, computeFn) => {
        if (cache.has(cacheKey)) {
            return cache.get(cacheKey);
        }

        const stats = computeFn();
        cache.set(cacheKey, stats);
        return stats;
    };

    // 캐시 무효화
    const invalidate = (pattern) => {
        if (!pattern) {
            cache.clear();
            filterCache.clear();
            return;
        }

        // 패턴 매칭으로 특정 캐시만 삭제
        Array.from(cache.keys()).forEach(key => {
            if (key.includes(pattern)) {
                cache.delete(key);
            }
        });
    };

    // 캐시 상태 조회 (디버깅)
    const getStats_Debug = () => {
        return {
            cacheSize: cache.size,
            filterCacheSize: filterCache.size,
            cacheKeys: Array.from(cache.keys()),
            filterCacheKeys: Array.from(filterCache.keys()),
        };
    };

    return {
        getFilteredData,
        getStats,
        invalidate,
        getStats_Debug,
    };
})();
