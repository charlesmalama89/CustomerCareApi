import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductDTO } from './dto/product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productService: Repository<Product>){}

    async addProduct(product: ProductDTO): Promise<Product>{

        product.dateCreated = new Date().toLocaleString();

        const productToAdd = await this.productService.create(product);
        return await this.productService.save(productToAdd);
    }

    getAllProducts(){
        return this.productService.find();
    }
}
