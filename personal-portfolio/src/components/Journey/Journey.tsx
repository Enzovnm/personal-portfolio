import basilidesLogo from "../../assets/basilides_logo.png";
import giordanoLogo from "../../assets/giordano_logo.png";
import wiseupLogo from "../../assets/wiseup_logo.png";

export const Journey = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-10/12  h-[140vh] flex justify-center ">
        <ul className="before:content-[''] before:h-full before:w-1 relative before:absolute before:bg-pink-500">
          <li className="before:content-[''] before:border-r-[10px] top-72 before:border-b-[20px] before:border-l-[10px] before:border-t-transparent before:border-r-transparent before:border-b-slate-blue-explorer before:border-l-transparent before:-rotate-90 before:h-8 before:-z-0 before:absolute before:-left-3.5 absolute  left-3.5 w-132 h-64 bg-slate-blue-explorer p-4 rounded-xl text-white">
            <div className="flex items-center justify-between w-full">
              <div className="h-12 w-12">
                <img
                  className="object-cover w-full h-full"
                  src={giordanoLogo}
                />
              </div>
              <h1 className="text-xl font-bold">School: Giordano</h1>
              <p className="text-gray-400">2021</p>
            </div>
            <div className="mt-4">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione cum recusandae ad enim? Illum accusamus quas odio libero
                vel! Recusandae natus voluptate modi quisquam accusantium
                voluptas consequatur excepturi ratione doloremque!
              </p>
            </div>
          </li>
          <li className="before:content-[''] before:border-r-[10px] before:border-b-[20px] before:border-l-[10px] before:border-t-transparent before:border-r-transparent before:border-b-slate-blue-explorer before:border-l-transparent before:rotate-90  before:h-8 before:-z-0 before:absolute before:-right-3.5 absolute  right-3.5 w-132 h-64 bg-slate-blue-explorer p-4 rounded-xl text-white">
            <div className="flex items-center justify-between w-full">
              <div className="h-12 w-12">
                <img
                  className="object-cover w-full h-full"
                  src={basilidesLogo}
                />
              </div>
              <h1 className="text-xl font-bold">
                Technical School: <br />
                ETEC Prof° Basilides de Godoy
              </h1>
              <p className="text-gray-400">2020~2021</p>
            </div>
            <div className="mt-4">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione cum recusandae ad enim? Illum accusamus quas odio libero
                vel! Recusandae natus voluptate modi quisquam accusantium
                voluptas consequatur excepturi ratione doloremque!
              </p>
            </div>
          </li>
          <li className="before:content-[''] before:border-r-[10px] before:border-b-[20px] before:border-l-[10px] before:border-t-transparent before:border-r-transparent before:border-b-slate-blue-explorer before:border-l-transparent before:rotate-90  before:h-8 before:-z-0 before:absolute before:-right-3.5 absolute top-144 right-3.5 h-64 w-132 bg-slate-blue-explorer p-4 rounded-xl text-white">
            <div className="flex items-center justify-between w-full">
              <div className="h-12 w-12">
                <img className="object-cover w-full h-full" src={wiseupLogo} />
              </div>
              <h1 className="text-xl font-bold">
                English language school : <br />
                Wiseup
              </h1>
              <p className="text-gray-400">2019~2022</p>
            </div>
            <div className="mt-4">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione cum recusandae ad enim? Illum accusamus quas odio libero
                vel! Recusandae natus voluptate modi quisquam accusantium
                voluptas consequatur excepturi ratione doloremque!
              </p>
            </div>
          </li>
          <li className="before:content-[''] before:border-r-[10px] top-216 before:border-b-[20px] before:border-l-[10px] before:border-t-transparent before:border-r-transparent before:border-b-slate-blue-explorer before:border-l-transparent before:-rotate-90 before:h-8 before:-z-0 before:absolute before:-left-3.5 absolute  left-3.5 w-132 h-64 bg-slate-blue-explorer p-4 rounded-xl text-white">
            <div className="flex items-start justify-between w-full">
              <h1 className="text-xl font-bold">
                College:
                <br />
                Universidade Paulista
              </h1>
              <p>2022 ~ Present</p>
            </div>
            <div className="mt-4">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione cum recusandae ad enim? Illum accusamus quas odio libero
                vel! Recusandae natus voluptate modi quisquam accusantium
                voluptas consequatur excepturi ratione doloremque!
              </p>
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
