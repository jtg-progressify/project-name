import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class InvoiceService {
  create(createInvoiceDto: CreateInvoiceDto) {
    return 'This action adds a new invoices';
  }

  findAll() {
    return `This action returns all invoices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoices`;
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoices`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoices`;
  }
}
