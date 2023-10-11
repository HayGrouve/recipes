import Link from "next/link";
import { FC } from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";

interface IProps {
  id: string;
  title: string;
  image?: string;
  description: string;
  category: string;
  userImg?: string;
  userName: string;
  createdAt: string;
}

const Card: FC<IProps> = ({
  id,
  title,
  image,
  description,
  category,
  userImg,
  userName,
  createdAt,
}) => {
  return (
    <Link href={`recipe/${id}`}>
      <div className="card-aspect max-w-sm shadow-2xl" title={title}>
        <div className=" overflow-hidden rounded-t">
          <img
            className="aspect-square h-full w-full object-cover"
            src={image ? image : "/recipe.jpg"}
            alt={title}
          />
        </div>
        <div className="bg-white p-4 ">
          <div className="mb-8 text-center">
            <h3 className="mb-2 max-h-8 overflow-hidden text-2xl font-bold text-gray-900">
              {title}
            </h3>
            <p className="text-xs text-gray-600">Category:</p>
            <p className="font-bold text-gray-500">
              {`${category.slice(0, 1).toUpperCase()}${category.slice(1)}`}
            </p>
          </div>
          <Separator className="mb-2" />
          <div className="flex items-center">
            <Image
              className="mr-4 h-10 w-10 rounded-full"
              src={userImg ? userImg : "/user.jpg"}
              alt={`Avatar of ${userName}`}
              width={1000}
              height={1000}
            />
            <div className="text-sm">
              <p className="leading-none text-gray-900">{userName}</p>
              <p className="text-gray-600">
                {`${new Date(createdAt).getDate()} ${new Date(
                  createdAt,
                ).toLocaleString("default", { month: "short" })}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
