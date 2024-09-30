import Card from "@/components/Card";

const Home = () => {
  return (
    <main>
      <h1>This Home</h1>
      <div className="flex justify-center items-center">
        <Card name="Hasnain" Roll={1234} day="monday" />
        <br />
        <Card name="danial" Roll={4321} day="thusday" />
        <br />  
        <Card name="Muhammad Inam" Roll={2000} day="wednesday" />
      </div>
    </main>
  );
};

export default Home;
