import Categories from "../components/Categories";
import MerchadiseMain from "../components/MerchadiseMain";
import MerchandiseItem from "../components/MerchandiseItem";
import MerchandiseList from "../components/MerchandiseList";
import Slide from "../components/Slide";

export default function Web() {
  return (
    <>
      <Slide />
      <MerchadiseMain>
        <Categories categories={[]} />
        <MerchandiseList>
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
        </MerchandiseList>
        <MerchandiseList>
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
        </MerchandiseList>
        <MerchandiseList>
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
        </MerchandiseList>
        <MerchandiseList>
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
        </MerchandiseList>
      </MerchadiseMain>
    </>
  );
}
