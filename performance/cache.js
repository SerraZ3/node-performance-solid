console.log("\n=== CACHE INEFICIENTE vs CACHE EFFICIENTE ===");

const fetchData = async id => new Promise(res => setTimeout(() => res(id), 5));
const cache = {};

const datasetsCache = {
    small: Array.from({ length: 100 }, (_, i) => i),
    medium: Array.from({ length: 100000 }, (_, i) => i),
    large: Array.from({ length: 1000000 }, (_, i) => i)
};

async function noCache(ids) {
    console.time("noCache");
    const results = [];
    for (let id of ids) results.push(await fetchData(id));
    console.timeEnd("noCache");
}

async function withCache(ids) {
    console.time("withCache");
    const results = [];
    for (let id of ids) {
        if (!cache[id]) cache[id] = await fetchData(id);
        results.push(cache[id]);
    }
    console.timeEnd("withCache");
}

(async () => {
    for (let key in datasetsCache) {
        console.log(`\n${key.toUpperCase()} data:`);
        await noCache(datasetsCache[key].slice(0, key === 'large' ? 1000 : undefined));
        await withCache(datasetsCache[key]);
    }
})();
