import Header from "@/components/header";
import Image from "next/image";

interface Profile {
  imageSrc: string;
  name: string;
  age: number;
  nationality: string;
  height: number;
  weight: number;
  job: string;
  famousLines: string[];
}

export default function Assignment2() {
  const 등장인물A = {
    imageSrc: "/마석도.png",
    name: "마석도",
    age: 45,
    nationality: "한국",
    height: 179,
    weight: 120,
    job: "직업",
    famousLines: ["응 아직 솔로야"],
  };

  return (
    <>
      <Header title={"프로필 카드 만들기"} hasBack={true} />
      <div className="w-full h-full flex flex-col overflow-y-auto py-5 px-5 gap-5">
        {/* 이 아래에 코드를 작성해 주세요. */}
        <ProfileCard
          imageSrc={등장인물A.imageSrc}
          name={등장인물A.name}
          age={등장인물A.age}
          nationality={등장인물A.nationality}
          height={등장인물A.height}
          weight={등장인물A.weight}
          job={등장인물A.job}
          famousLines={등장인물A.famousLines}
        />
      </div>
    </>
  );
}

function ProfileCard({
  imageSrc,
  name,
  age,
  nationality,
  height,
  weight,
  job,
  famousLines,
}: Profile) {
  return (
    <div className="p-5 bg-white border rounded-md mx-16">
      <div className="w-full flex justify-center pb-5">
        <Image
          className="rounded-full size-40"
          src={imageSrc}
          width={500}
          height={500}
          alt="profile"
        />
      </div>
      <div className="w-full h-full flex flex-col gap-2">
        <div>
          <p className="text-xs text-stone-400">이름</p>
          <div>{name}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">나이</p>
          <div>{age}세</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">국적</p>
          <div>{nationality}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">키/몸무게</p>
          <div>
            {height}cm / {weight}kg
          </div>
        </div>
        <div>
          <p className="text-xs text-stone-400">직업</p>
          <div>{job}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">명대사</p>
          {famousLines.map((line, index) => (
            <div key={`${name}FamouseLine${index}`}>&quot;{line}&quot;</div>
          ))}
        </div>
      </div>
    </div>
  );
}
