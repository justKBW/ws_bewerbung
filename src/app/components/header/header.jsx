import Image from "next/image";

export function Header() {
  return (
    <div className="w-[150px] h-[150px] m-6">
      <Image
        src={"/images/w&s_logo_white_200-200.jpg"}
        width={200}
        height={200}
        alt="Logo of W&S Digitalagentur GmbH"
      />
    </div>
  );
}
