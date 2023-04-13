import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="flex h-[30%] w-[30%] items-center justify-center rounded-lg p-4 shadow-md shadow-blue-200">
      <Image
        src="/profile.jpg"
        alt="profile_picture_of_me"
        width={328}
        height={328}
        className="h-full w-full rounded-md"
      ></Image>
    </div>
  );
};

export default HeroImage;
