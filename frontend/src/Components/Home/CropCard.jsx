function CropCard() {
  const cropCard = [
    {
      image: "/assets/anh_lua.jpg",
      title: "Lúa nước",
      describe: "Từ gieo mạ, đẻ nhánh đến làm đòng và chín",
    },
    {
      image: "/assets/anh_lua.jpg",
      title: "Lúa nước",
      describe: "Từ gieo mạ, đẻ nhánh đến làm đòng và chín",
    },
    {
      image: "/assets/anh_lua.jpg",
      title: "Lúa nước",
      describe: "Từ gieo mạ, đẻ nhánh đến làm đòng và chín",
    },
    {
      image: "/assets/anh_lua.jpg",
      title: "Lúa nước",
      describe: "Từ gieo mạ, đẻ nhánh đến làm đòng và chín",
    },
    {
      image: "/assets/anh_lua.jpg",
      title: "Lúa nước",
      describe: "Từ gieo mạ, đẻ nhánh đến làm đòng và chín",
    },
    {
      image: "/assets/anh_lua.jpg",
      title: "Lúa nước",
      describe: "Từ gieo mạ, đẻ nhánh đến làm đòng và chín",
    },
  ];

  return (
    <>
      {cropCard.map((item) => {
        return (
          <div className="group w-full border rounded-[5px] border-white hover:border-yellow-300/80">
            <div className="overflow-hidden">
              <img
                className="h-44 w-full object-top transition-transform duration-300 group-hover:scale-105 rounded-t-[5px]"
                src={item.image}
                alt=""
              />
            </div>
            <div className="bg-white p-5 rounded-b-[5px]">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.describe}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CropCard;
