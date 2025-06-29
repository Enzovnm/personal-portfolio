import imgUrl from "../../assets/me.png";

export const AboutMe = () => {
  return (
    <div className="flex h-full w-full">
      <div className="  w-1/2">
        <div className="w-80 h-80 rounded-full">
          <img
            className="w-full h-full rounded-full object-cover "
            src={imgUrl}
          />
        </div>
      </div>
      <div className=" w-1/2">ds</div>
    </div>
  );
};
