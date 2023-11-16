import Image from "next/image";

export default function Nav() {

  const navigation = [
    {
      name: "Home",
      Link: "/",
    },
    {
      name: "Destination",
      Link: "/destinations",
    },
    {
      name: "Tips",
      Link: "/tips",
    },
    {
      name: "Community",
      Link: "/community",
    },
  ];
  return (
    <nav className="bg-transparent backdrop-blur-md backdrop:filter px-20 py-2">
      <div className="flex justify-between ">
        <Image src="/logo.png" width={100} height={100} alt="Jani-Journeys" />
        <ul className="flex space-x-3 items-center uppercase  font-black">
          {navigation.map((navi, gation) => {
            return (
              <li key={gation}>
                <a href={navi.Link}>{navi.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
