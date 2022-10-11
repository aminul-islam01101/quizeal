async function dataLoader(params) {
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

const Loader = async () => {
    const topics = await dataLoader();
    const topic = await dataLoader(1);
    const quizTopics = topics.data;
    const quizTopic = topic.data;

    return { quizTopics, quizTopic };
};
export default Loader;
