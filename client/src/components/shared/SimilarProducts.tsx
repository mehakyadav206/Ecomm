import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import type { IProduct } from "@/types";
import { Card } from "../ui/card";
import { Bookmark } from "lucide-react";

const Category = ({ name, slug }: { name: string; slug: string }) => {
  return (
    <Link to={`/products/${slug}`}>
      <Button className="cursor-pointer hover:bg-gray-400" variant={"link"}>
        {name}
      </Button>
    </Link>
  );
};

const Product = (data: IProduct) => {
  console.log(data);
  return (
    <Link to={`/product/${data.slug}`}>
      <Card className="relative w-[200px] p-0 overflow-hidden gap-0">
        <div className="absolute top-2 right-2 cursor-pointer">
          <Bookmark className="text-red-400" />
        </div>
        <div className="w-full h-[250px]">
          <img src={data.images[0].url} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="p-2">
          <h1 className="text-sm font-semibold line-clamp-2">{data.title}</h1>
          <div className="pt-3">
            <span className="font-semibold">₹{data.price}</span>/<span className="line-through text-xs">₹{data.mrp}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}