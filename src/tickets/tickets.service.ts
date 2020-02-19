import { Injectable, Logger } from '@nestjs/common';
import { Repository, Equal } from 'typeorm';
import { Tickets } from './entities/tickets.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { ticketsDTO } from './dto/tickets.dto';
import { commentDTO } from './dto/coment.dto';
import * as moment from 'moment'
import { UserService } from 'src/auth/user.service';
import { MailerService } from '@nest-modules/mailer';

@Injectable()
export class TicketsService {
    toEmail = '';
    
    constructor(
        @InjectRepository(Tickets)
        private readonly ticketsRepository: Repository<Tickets>,
        private readonly mailerService: MailerService
        ){}

    async openTicket(ticket: ticketsDTO): Promise<Tickets>{

        const ticketNumber = Math.floor(Math.random() * (100000 - 1000 + 1) + 1000);
        ticket.ticketNum = ticketNumber;
        ticket.status = 'Pending';
        ticket.createdOn = moment().format('YYYY-MM-DD HH:MM:SS');
        ticket.updatedOn = moment().format('YYYY-MM-DD HH:MM:SS');
        console.log(ticket);
        
        const createTicket = this.ticketsRepository.create(ticket);

        console.log(createTicket);

        const department = ticket.department;
        if(department === 'Tech'){
            this.toEmail = 'tech@hobbiton.co.zm';
        }else if(department === 'Human Resources'){
            this.toEmail = 'invest@hobbiton.co.zm';
        }else if(department === 'Finance'){
            this.toEmail = 'finance@hobbiton.co.zm ';
        }else if(department === 'Sales'){
            this.toEmail = 'invest@hobbiton.co.zm';
        }else{
            this.toEmail = 'invest@hobbiton.co.zm';
        }
        this.SendEmail(this.toEmail, ticket);
        return await this.ticketsRepository.save(createTicket);
    }

    SendEmail(toEmail: string, ticket: ticketsDTO) {
        this.mailerService.sendMail({
          to: toEmail,
          from: 'charles.malama@hobbiton.co.zm',
          subject: 'CUSTOMER CARE QUERY',
          //html: '<div><p> Hi Team, </p><br><p> Hi Team, Testing Customer Care System </p></div>'
          html:`<!doctype html>
          <html>
            <head>
              <meta name="viewport" content="width=device-width" />
              <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
              <title>Simple Transactional Email</title>
              <style>
                /* -------------------------------------
                    GLOBAL RESETS
                ------------------------------------- */
                
                /*All the styling goes here*/
                
                img {
                  border: none;
                  -ms-interpolation-mode: bicubic;
                  max-width: 100%; 
                }
          
                body {
                  background-color: #f6f6f6;
                  font-family: sans-serif;
                  -webkit-font-smoothing: antialiased;
                  font-size: 14px;
                  line-height: 1.4;
                  margin: 0;
                  padding: 0;
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%; 
                }
          
                table {
                  border-collapse: separate;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  width: 100%; }
                  table td {
                    font-family: sans-serif;
                    font-size: 14px;
                    vertical-align: top; 
                }
          
                /* -------------------------------------
                    BODY & CONTAINER
                ------------------------------------- */
          
                .body {
                  background-color: #f6f6f6;
                  width: 100%; 
                }
          
                /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
                .container {
                  display: block;
                  margin: 0 auto !important;
                  /* makes it centered */
                  max-width: 580px;
                  padding: 10px;
                  width: 580px; 
                }
          
                /* This should also be a block element, so that it will fill 100% of the .container */
                .content {
                  box-sizing: border-box;
                  display: block;
                  margin: 0 auto;
                  max-width: 580px;
                  padding: 10px; 
                }
          
                /* -------------------------------------
                    HEADER, FOOTER, MAIN
                ------------------------------------- */
                .main {
                  background: #ffffff;
                  border-radius: 3px;
                  width: 100%; 
                }
          
                .wrapper {
                  box-sizing: border-box;
                  padding: 20px; 
                }
          
                .content-block {
                  padding-bottom: 10px;
                  padding-top: 10px;
                }
          
                .footer {
                  clear: both;
                  margin-top: 10px;
                  text-align: center;
                  width: 100%; 
                }
                  .footer td,
                  .footer p,
                  .footer span,
                  .footer a {
                    color: #999999;
                    font-size: 12px;
                    text-align: center; 
                }
          
                /* -------------------------------------
                    TYPOGRAPHY
                ------------------------------------- */
                h1,
                h2,
                h3,
                h4 {
                  color: #000000;
                  font-family: sans-serif;
                  font-weight: 400;
                  line-height: 1.4;
                  margin: 0;
                  margin-bottom: 30px; 
                }
          
                h1 {
                  font-size: 35px;
                  font-weight: 300;
                  text-align: center;
                  text-transform: capitalize; 
                }
          
                p,
                ul,
                ol {
                  font-family: sans-serif;
                  font-size: 14px;
                  font-weight: normal;
                  margin: 0;
                  margin-bottom: 15px; 
                }
                  p li,
                  ul li,
                  ol li {
                    list-style-position: inside;
                    margin-left: 5px; 
                }
          
                a {
                  color: #3498db;
                  text-decoration: underline; 
                }
          
                /* -------------------------------------
                    BUTTONS
                ------------------------------------- */
                .btn {
                  box-sizing: border-box;
                  width: 100%; }
                  .btn > tbody > tr > td {
                    padding-bottom: 15px; }
                  .btn table {
                    width: auto; 
                }
                  .btn table td {
                    background-color: #ffffff;
                    border-radius: 5px;
                    text-align: center; 
                }
                  .btn a {
                    background-color: #ffffff;
                    border: solid 1px #3498db;
                    border-radius: 5px;
                    box-sizing: border-box;
                    color: #3498db;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 14px;
                    font-weight: bold;
                    margin: 0;
                    padding: 12px 25px;
                    text-decoration: none;
                    text-transform: capitalize; 
                }
          
                .btn-primary table td {
                  background-color: #3498db; 
                }
          
                .btn-primary a {
                  background-color: #3498db;
                  border-color: #3498db;
                  color: #ffffff; 
                }
          
                /* -------------------------------------
                    OTHER STYLES THAT MIGHT BE USEFUL
                ------------------------------------- */
                .last {
                  margin-bottom: 0; 
                }
          
                .first {
                  margin-top: 0; 
                }
          
                .align-center {
                  text-align: center; 
                }
          
                .align-right {
                  text-align: right; 
                }
          
                .align-left {
                  text-align: left; 
                }
          
                .clear {
                  clear: both; 
                }
          
                .mt0 {
                  margin-top: 0; 
                }
          
                .mb0 {
                  margin-bottom: 0; 
                }
          
                .preheader {
                  color: transparent;
                  display: none;
                  height: 0;
                  max-height: 0;
                  max-width: 0;
                  opacity: 0;
                  overflow: hidden;
                  mso-hide: all;
                  visibility: hidden;
                  width: 0; 
                }
          
                .powered-by a {
                  text-decoration: none; 
                }
          
                hr {
                  border: 0;
                  border-bottom: 1px solid #f6f6f6;
                  margin: 20px 0; 
                }
          
                /* -------------------------------------
                    RESPONSIVE AND MOBILE FRIENDLY STYLES
                ------------------------------------- */
                @media only screen and (max-width: 620px) {
                  table[class=body] h1 {
                    font-size: 28px !important;
                    margin-bottom: 10px !important; 
                  }
                  table[class=body] p,
                  table[class=body] ul,
                  table[class=body] ol,
                  table[class=body] td,
                  table[class=body] span,
                  table[class=body] a {
                    font-size: 16px !important; 
                  }
                  table[class=body] .wrapper,
                  table[class=body] .article {
                    padding: 10px !important; 
                  }
                  table[class=body] .content {
                    padding: 0 !important; 
                  }
                  table[class=body] .container {
                    padding: 0 !important;
                    width: 100% !important; 
                  }
                  table[class=body] .main {
                    border-left-width: 0 !important;
                    border-radius: 0 !important;
                    border-right-width: 0 !important; 
                  }
                  table[class=body] .btn table {
                    width: 100% !important; 
                  }
                  table[class=body] .btn a {
                    width: 100% !important; 
                  }
                  table[class=body] .img-responsive {
                    height: auto !important;
                    max-width: 100% !important;
                    width: auto !important; 
                  }
                }
          
                /* -------------------------------------
                    PRESERVE THESE STYLES IN THE HEAD
                ------------------------------------- */
                @media all {
                  .ExternalClass {
                    width: 100%; 
                  }
                  .ExternalClass,
                  .ExternalClass p,
                  .ExternalClass span,
                  .ExternalClass font,
                  .ExternalClass td,
                  .ExternalClass div {
                    line-height: 100%; 
                  }
                  .apple-link a {
                    color: inherit !important;
                    font-family: inherit !important;
                    font-size: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                    text-decoration: none !important; 
                  }
                  #MessageViewBody a {
                    color: inherit;
                    text-decoration: none;
                    font-size: inherit;
                    font-family: inherit;
                    font-weight: inherit;
                    line-height: inherit;
                  }
                  .btn-primary table td:hover {
                    background-color: #34495e !important; 
                  }
                  .btn-primary a:hover {
                    background-color: #34495e !important;
                    border-color: #34495e !important; 
                  } 
                }
          
              </style>
            </head>
            <body class="">
              <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
                <tr>
                  <td>&nbsp;</td>
                  <td class="container">
                    <div class="content">
          
                      <!-- START CENTERED WHITE CONTAINER -->
                      <table role="presentation" class="main">
          
                        <!-- START MAIN CONTENT AREA -->
                        <tr>
                          <td class="wrapper">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                              <tr>
                                <td>
                                  <p>Dear Team,</p>
                                  <p>A ticket of number ${ticket.ticketNum} has been generated. Kindly take a look at it as soon as possible.</p>
                                  <!-- <p>Kindly take a look at it as soon as possible.</p> -->
                                  <p>Best regards.</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
          
                      <!-- END MAIN CONTENT AREA -->
                      </table>
                      <!-- END CENTERED WHITE CONTAINER -->
          
                      <!-- START FOOTER -->
                      <div class="footer">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td class="content-block">
                              <span class="apple-link">Hobbiton Investmen Management</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="content-block powered-by">
                              Powered by <a href="http://hobbiton.co.zm">Hobbiton</a>.
                            </td>
                          </tr>
                        </table>
                      </div>
                      <!-- END FOOTER -->
          
                    </div>
                  </td>
                  <td>&nbsp;</td>
                </tr>
              </table>
            </body>
          </html>`
        })
        .then((res) => {
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        })
      }


    
    getAllTickets(): Promise<Tickets[]>{
        return this.ticketsRepository.find();
    }

    getTicketById(id: number){
        return  this.ticketsRepository.find({where: {
            id: Equal(id)
        }});
    }

    getTicketsByStatus(status: string){
        return this.ticketsRepository.find({where: {
            status: Equal(status)
        }})
    }

     async updateTicketComment(id: number, ticket: ticketsDTO): Promise<Tickets>{
           console.log(ticket);
           
            let ticketInDb = await this.ticketsRepository.findOne(id);
            ticketInDb.status = 'Closed';
            ticketInDb.closeTicketComment = ticket.closeTicketComment;
            ticketInDb.closedBy = ticket.closedBy;

            return await this.ticketsRepository.save(ticketInDb)
            
            // ticketInDb = {
            //     ...ticket
            // }
            // const updatedTicket = await this.ticketsRepository.update()
            // ticketInDb.status = ''
           

    }

}
