// server component를 사용하는 예제
const ServerComponent = async () => {
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default ServerComponent;