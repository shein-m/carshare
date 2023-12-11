import { Container } from "../components/Container/Container";

const HomePage = () => {
  return (
    <>
      <section>
        <Container>
          <div className="bg-black md:bg-main-bg bg-cover bg-no-repeat bg-center h-[800px] flex flex-col justify-between">
            <div className="flex justify-center">
              <h1 className=" text-white text-[24px] md:text-[40px] xl:text-[60px] mt-[80px] font-bold text-center mt-[10px] ">
                Discover the world on wheels with our car rental service
              </h1>
            </div>
            <div className="flex justify-center mt-auto mb-[60px]">
              <p className=" text-white text-[54px] font-bold text-center">
                Carshare
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
