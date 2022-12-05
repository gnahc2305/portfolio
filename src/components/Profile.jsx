import React from "react";
import { motion } from "framer-motion";

function Profile() {
  return (
    <section>
      <div className="flex justify-center mt-10 sm:block">
        <div>
          <img src="/profile.png" alt="profile" />
        </div>

        <div className='max-w-[400px] xl:max-w-[600px] px-5'>
          <h1 className="text-[50px]">Andres Chang</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid omnis necessitatibus doloremque beatae totam vel vitae consequatur non at, provident autem nostrum itaque fugit.</p>
        </div>

      </div>

      {/* <div>
        <img src="/profile.png" alt="profile" />
      </div> */}
    </section>
  );
}

export default Profile;
