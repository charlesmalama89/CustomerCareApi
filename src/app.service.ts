import { Injectable, Logger } from "@nestjs/common";
import { MailerService, ISendMailOptions } from '@nest-modules/mailer';
import { Timestamp } from "typeorm";
import * as moment from "moment";

@Injectable()
export class AppService {

  constructor(private readonly emailService: MailerService) {}
  
  date: string;
  emailOptions: ISendMailOptions;

  getHello(): string {
    return "Hello World";
  }

  testSendEmail() {
    this.emailService.sendMail({
      to: 'charles.malama@hobbiton.co.zm',
      from: 'customercare@hobbiton.co.zm',
      subject: 'Tesing email from Charles',
      html: '<h2> Hi Malama </h2>'
    })
    .then((res) => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }
}
