import React, { useState } from "react";
import Image from "next/image";

const Histoire = () => {
  return (
    <div
      id="Histoire"
      className="flex flex-col items-center justify-center h-full"
    >
      <h1 className="font-extrabold text-6xl text-center pb-28 pt-36 ml-12 mr-12">
        Histoire de l&apos;ECE et de la JBTV
      </h1>
      <div className="grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-20 ml-12 mr-12 lg:ml-28 lg:mr-28 pb-48 text-justify">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum
          feugiat neque, elementum hendrerit eros pharetra sit amet. Aliquam
          tellus dolor, varius auctor luctus vitae, consequat et lacus. Proin
          venenatis leo metus, efficitur auctor turpis rhoncus sed. Nam a
          pellentesque felis, et dignissim neque. Mauris sed tempus eros.
          Suspendisse vel ex quis nulla convallis imperdiet in lobortis quam.
          Nunc tristique eros eu porttitor euismod. Pellentesque viverra libero
          in nunc mattis sollicitudin. Aliquam tristique finibus odio. Maecenas
          ullamcorper vitae ipsum nec efficitur. Donec a nulla nec ligula
          bibendum tempor tempus eget metus. Integer vulputate nulla et velit
          ultrices, ac molestie leo euismod. Fusce scelerisque elit ac purus
          consequat, id condimentum est facilisis. Nunc et malesuada libero,
          vitae sodales urna. Integer ut dui lectus. Vestibulum urna dolor,
          blandit tempus maximus a, lacinia vitae mi. Etiam libero dolor,
          faucibus sit amet augue et, consectetur lobortis tortor. Donec ipsum
          erat, dictum ut pharetra ut, sodales a risus. Aliquam luctus felis sed
          ultrices gravida. Etiam molestie quam at quam viverra, nec commodo
          lectus aliquam. Vivamus non urna id orci sagittis ullamcorper at quis
          ex. Cras suscipit condimentum pellentesque. Aenean et vestibulum arcu,
          vitae ullamcorper ante. Proin tempus orci nec massa efficitur, vitae
          pellentesque enim blandit. Ut justo eros, laoreet non erat ac,
          convallis egestas ligula. Donec ut eros non mi lacinia ultricies. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Proin vitae erat nisl. In tincidunt nisl nulla, ac
          elementum ex semper egestas.
        </div>
        <div>
          <Image
            src="/picture/histoire.jpg"
            width={976}
            height={664}
            alt="Photo Histoire"
          />
        </div>
      </div>
    </div>
  );
};

export default Histoire;
