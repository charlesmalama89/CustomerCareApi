import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}

    @Post()
    addProduct(@Body() product: ProductDTO){
        return this.productService.addProduct(product);
    }

    @Get()
    fetchAllProducts(){
        return this.productService.getAllProducts();
    }
}
