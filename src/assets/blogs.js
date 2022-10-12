const blogData = [
    {
        id: 1,
        src: 'https://i.ibb.co/QKyzHdR/Blog1.jpg',
        title: 'Blog-1',
        Topics: 'How does context API work? ',
        description:
            'The React Context API is an effective way for  React app  to create global variables that can be passed as well as accessed from anywhere of data flow system. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management. by storing the props in a store and using these props from the store by child component(s) without actually passing them manually at each level of the component tree.',
    },
    {
        id: 2,
        src: 'https://i.ibb.co/18Njdb7/Blog2.png',
        title: 'Blog-2',
        Topics: 'What is useREF Hook ?',
        description:
            ' useRef Hook is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <div ref={myRef} /> , React will set its .current property to the corresponding DOM node whenever that node changes. Use useRef when need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.',
    },
    {
        id: 3,
        src: 'https://i.ibb.co/LPmFSYz/Blog-3.webp',
        title: 'Blog-3',
        Topics: 'What is the purpose of react router? ',
        description:
            'React Router is a standard library for routing in React. It enables  navigation among views of various components in a React Application. It also allows changing the browser URL, and keeps the UI in sync with the URL.Routing is a process of binding a web URL to a specific resource in the web application. React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience.',
    },
];
export default blogData;
