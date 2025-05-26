import Itinerary from "./Itinerary";

const DetailInfo = () => {
  return (
    <div className="mt-3 grid grid-cols-3 gap-3 gap-x-9">
      <div className="col-span-2">
        <p className="text-gray-500 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque
          beatae commodi placeat facere iure? Earum, dignissimos omnis inventore
          placeat quaerat perferendis. Ipsa optio ratione a. Sequi
          exercitationem sunt reprehenderit.
        </p>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-1.5">
        <img
          src="https://images.unsplash.com/photo-1605523746900-8aa30db1befd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="max-h-[500px] w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1527063460378-8fdae9ccc174?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="max-h-[500px] w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   "
          alt=""
          className="max-h-[500px] w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="max-h-[500px] w-full object-cover"
        />
      </div>
      <div className="col-span-2 mt-6">
        <p className="text-2xl font-medium">Overview (概要)</p>
        <p className="text-justify mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aperiam
          ipsa nesciunt fugit rem natus deserunt ipsum eaque voluptatum possimus
          accusamus corporis ullam, exercitationem perspiciatis nobis explicabo,
          voluptates laborum tempora cumque repudiandae reprehenderit
          asperiores, aliquam similique. Sunt quaerat facere, amet cum sint
          nostrum sequi praesentium vitae accusamus, totam eligendi possimus
          mollitia quos quia iste nihil doloremque doloribus consequatur qui
          impedit delectus. Eos ex non qui ipsam nihil totam doloremque
          temporibus incidunt. Corrupti quasi illum reiciendis, officiis
          asperiores sunt sapiente nulla perspiciatis in molestias! Illo
          veritatis corporis porro dolore fugit amet aliquam eius architecto
          dolorum! Officia sapiente quos voluptatibus laudantium autem.
        </p>
      </div>
      <div className="row-start-2 row-span-2 col-start-3">
        <div>
          <p className="text-lg font-medium">Price</p>
          <p className="mt-0.5">$ 500 per person</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-medium">Duration</p>
          <p className="mt-0.5">7 days</p>
        </div>
        <div className="mt-3">
          <p className="text-lg font-medium">Destinations</p>
          <p className="mt-0.5">Tokyo, Kyoto, Nara, Osaka</p>
        </div>
        <Itinerary />
        <div className="px-6 py-3 border border-gray-300 text-gray-800 mt-9 w-fit cursor-pointer hover:bg-gray-300 transition">Booking (予約)</div>
      </div>
      
    </div>
  );
};

export default DetailInfo;
