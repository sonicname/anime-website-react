import { useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button";
import errorImg from "../images/404.png";
import { Fade } from "react-reveal";

const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-green-300 flex items-center justify-center">
      <section className="flex flex-col items-center gap-5">
        <div className="max-w-[256px] max-h-[256px] rounded-md">
          <Fade bottom>
            <img
              className="w-full h-full object-cover"
              srcSet={errorImg}
              alt=""
            />
          </Fade>
        </div>
        <Fade bottom>
          <h1 className="text-3xl font-semibold">Oops!</h1>
          <p className="text-xl">You need map!</p>
          <Button
            onClick={() => navigate("/")}
            className="p-4 text-white !bg-purple-600"
          >
            Turn Back
          </Button>
        </Fade>
      </section>
    </div>
  );
};

export default Error404Page;
