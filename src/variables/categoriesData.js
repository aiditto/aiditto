//images
import disinfectant from "../assets/img/disinfectant-illustration.svg";
import maskimg from "../assets/img/mask-illustration.svg";
import visorimg from "../assets/img/visor-illustration.svg";
import volunteer from "../assets/img/volunteer-illustration.svg";

export class Category {
  constructor(id, title, img) {
    this.id = id;
    this.title = title;
    this.img = img;
  }
}

export const categories = [
  new Category(1, "Förbruknings varor", disinfectant),
  new Category(2, "Egentillverkade varor", visorimg),
  new Category(3, "Certifierade varor", maskimg),
  new Category(4, "Voluntärhjälp", volunteer)
];
