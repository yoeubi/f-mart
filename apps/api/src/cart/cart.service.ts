import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { list } from 'src/merchandise/merchandise.service';

const carts = [
  {
    id: 1,
    store: {
      id: 1,
      name: 'abc',
    },
    merchandises: list.slice(0, 3).map((item) => ({ ...item, quantity: 1 })),
  },
];

@Injectable()
export class CartService {
  create(createCartDto: CreateCartDto) {
    const lastItem = carts[carts.length - 1];
    const id = lastItem.id || 1;
    return {
      id: id + 1,
      store: {
        id: 1,
        name: 'abc',
      },
      merchandise: [
        {
          ...createCartDto,
        },
      ],
    };
  }

  findAll() {
    return carts;
  }

  findOne(id: number) {
    return carts.find((cart) => cart.id === id);
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
