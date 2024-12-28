import TabComponent from './TabComponent';

const App = () => {
    const tabs = [
        { title: "Tab 1", content: "Content for Tab 1" },
        { title: "Tab 2", content: "Content for Tab 2" },
        { title: "Tab 3", content: "Content for Tab 3" },
        { title: "Tab 4", content: "Content for Tab 4" }

    ];

    return (
        <TabComponent tabs={tabs} />
    );
};

export default App;


