export const mailTemplate = (name: string) => {
  return `<!doctype html>
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                xmlns:o="urn:schemas-microsoft-com:office:office">

            <head>
                <title>

            </title>
            <!--[if !mso]><!-- -->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!--<![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css">
                #outlook a {
                    padding: 0;
                }

                .ReadMsgBody {
                    width: 100%;
                }

                .ExternalClass {
                    width: 100%;
                }

                .ExternalClass * {
                    line-height: 100%;
                }

                body {
                    margin: 0;
                    padding: 0;
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }

                table,
                td {
                    border-collapse: collapse;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }

                img {
                    border: 0;
                    height: auto;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                }

                p {
                    display: block;
                    margin: 13px 0;
                }
            </style>
            <!--[if !mso]><!-->
            <style type="text/css">
                @media only screen and (max-width:480px) {
                    @-ms-viewport {
                        width: 320px;
                    }

                    @viewport {
                        width: 320px;
                    }
                }
            </style>



            <style type="text/css">
                @media only screen and (min-width:480px) {
                    .mj-column-per-100 {
                        width: 100% !important;
                    }
                }
            </style>


            <style type="text/css">
            </style>

        </head>

        <body style="background-color:#f9f9f9;">


            <div style="background-color:#f9f9f9;">


                <div style="background:#f9f9f9;background-color:#f9f9f9;Margin:0px auto;max-width:600px;">

                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                        style="background:#f9f9f9;background-color:#f9f9f9;width:100%;">
                        <tbody>
                            <tr>
                                <td
                                    style="border-bottom:#333957 solid 5px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">

                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>



                <div style="background:#fff;background-color:#fff;Margin:0px auto;max-width:600px;">

                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                        style="background:#fff;background-color:#fff;width:100%;">
                        <tbody>
                            <tr>
                                <td
                                    style="border:#dddddd solid 1px;border-top:0px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">


                                    <div class="mj-column-per-100 outlook-group-fix"
                                        style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">

                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                            style="vertical-align:bottom;" width="100%">

                                            <tr>
                                                <td align="center"
                                                    style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                        role="presentation"
                                                        style="border-collapse:collapse;border-spacing:0px;">
                                                        <tbody>
                                                            <tr>
                                                                <td style="width:64px;">

                                                                    <img height="auto" src="https://www.ajce.in/300x300png.png"
                                                                        style="border:0;display:block;outline:none;text-decoration:none;width:100%;"
                                                                        width="64" />

                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td align="center"
                                                    style="font-size:0px;padding:10px 25px;padding-bottom:40px;word-break:break-word;">

                                                    <div
                                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:28px;font-weight:bold;line-height:1;text-align:center;color:#555;">
                                                        NASA Space Apps Challenge 2024
                                                    </div>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                                    <div
                                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:16px;line-height:22px;text-align:left;color:#555;">
                                                        Hello ${name}!<br></br>
                                                        <p>Your registration for the NASA Space Apps Challenge 2024 at Amal Jyothi College of Engineering has been successfully completed. We look forward to seeing you on October 5th!</p>
                            <p>If you have any queries, please reach out to us at <a href="mailto:nasaspaceapps@ajce.in">nasaspaceapps@ajce.in</a> or use the contact form on our website.</p>
                                                    </div>

                                                </td>
                                            </tr>

                                            

                                            <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                                    <div
                                                        style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:15px;text-align:left;color:#525252;">
                                                        Best regards,<br><br> Space Apps Team AJCE<br>
                                                    
                                                    </div>

                                                </td>
                                            </tr>

                                        </table>

                                    </div>


                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>



                <div style="Margin:0px auto;max-width:600px;">

                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                            <tr>
                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">


                                    <div class="mj-column-per-100 outlook-group-fix"
                                        style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">

                                        

                                    </div>


                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>





            </div>

        </body>

        </html>
    `;
};
