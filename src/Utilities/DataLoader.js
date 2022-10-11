async function Loader(params) {
    let res;
    if (params) {
        res = await fetch(`https://openapi.programming-hero.com/api/quiz/${params}`);
    } else {
        res = await fetch(`https://openapi.programming-hero.com/api/quiz`);
    }
    if (res.status === 404) {
        throw new Response('Not Found', { status: 404 });
    }
    const rootLoader = await res.json();

    return rootLoader;
}

export default Loader;
