

export const html =(solicitacao,Quantidade,sap,codigo,centro)=>{
    return `
    
    <html lang="pt-br">
        <head>
             <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
         </head>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="650">

        <tbody>
            <tr>

                <td bgcolor="f2f2f2" width="350" height="65"><a href="http://www.jallesmachado.com/" target="_blank"><img alt="" border="0" height="65" src="http://aplicacoes.jm.net.br/images/helpdesk/msg_01.gif" style="display: block;" width="237" /></a></td>
            
                <td bgcolor="f2f2f2" width="300" height="65"><img alt="" border="0" src="http://aplicacoes.jm.net.br/images/helpdesk/msg_dti.png" style="display: block;" /></td>
            
                </tr>
              

              <tr>

                <td colspan="2" valign="top">

                <table border="0" cellpadding="0" cellspacing="0" width="650">

                    <tbody>

                        <tr>

                            <td bgcolor="#f2f2f2" width="1"><img alt="" border="0" height="0" src="http://aplicacoes.jm.net.br/images/helpdesk/msg_05.gif" style="display:block" width="1" /></td>

                            <td valign="top" width="648">



                            <table border="0" cellpadding="0" cellspacing="0" width="648">

                            <tbody>

                            <tr>

                            <td height="34" width="20"> </td>

                            <td> </td>

                            <td width="20"> </td>

                        </tr>

                        <tr>

                            <td> </td>

                            <td align="left">

                            <font color="#2e3291" face="Arial, sans-serif" size="3">

                            <b>Baixa de Material</b></font></td>

                            <td> </td>

                        </tr>

                        <tr>

                            <td> </td>

                            <td> </td>

                            <td> </td>

                        </tr>

                    </tbody>

              </table>



          <table border="0" cellpadding="0" cellspacing="0" width="648">

            <tbody>

              <tr>

                <td width="20"> </td>

                <td height="140" valign="top" align="left">



                <!-- info -->

          <img src="http://aplicacoes.jm.net.br/images/helpdesk/msg_04.gif" width="593" height="1" alt="" style="display:block" border="0">



          <p><font color="#2f2f2f" face="Arial, sans-serif" size="2">Baixa deve ser confirmada no e-mail com copia para suporte@jallesmachado.com .</font></p>



           <table border="0" cellspacing="0" cellpadding="3">

           <tr>

            <td width="20">&nbsp;</td>

            <td width="160" align="right" bgcolor="#f4f4f4"><font color="#2f2f2f" face="Arial, sans-serif" size="2">Nome do Requisitante: </font></td>

            <td width="455" colspan="4" bgcolor="#fcfcfc" align="left"><font color="#2f2f2f" face="Arial, sans-serif" size="2">${solicitacao}</font></td>

            <td width="20">&nbsp;</td>

            </tr>


            <tr>

                <td width="20">&nbsp;</td>

                <td width="140" align="right" bgcolor="#f4f4f4"><font color="#2f2f2f" face="Arial, sans-serif" size="2">Quantidade:</font></td>

                <td width="475" colspan="4" bgcolor="#fcfcfc" align="left"><font color="#2f2f2f" face="Arial, sans-serif" size="2">${Quantidade}</font></td>

                <td width="20">&nbsp;</td>

            </tr>

          
            <tr>

                <td width="20">&nbsp;</td>

                <td width="140" align="right" bgcolor="#f4f4f4"><font color="#2f2f2f" face="Arial, sans-serif" size="2">SAP: </font></td>

                <td width="475" colspan="4" bgcolor="#fcfcfc" align="left"><font color="#2f2f2f" face="Arial, sans-serif" size="2">${sap}</font></td>

                <td width="20">&nbsp;</td>

            </tr>

            <tr>

                <td width="20">&nbsp;</td>

                    <td width="140" align="right" bgcolor="#f4f4f4"><font color="#2f2f2f" face="Arial, sans-serif" size="2">Material:  </font></td>
                    <td width="475" colspan="4" bgcolor="#fcfcfc" align="left"><font color="#2f2f2f" face="Arial, sans-serif" size="2">${codigo}</font></td>
                

                <td width="20">&nbsp;</td>

            </tr>
            
            <tr>

                <td width="20">&nbsp;</td>

                    <td width="140" align="right" bgcolor="#f4f4f4"><font color="#2f2f2f" face="Arial, sans-serif" size="2">Centro de custo:  </font></td>
                    <td width="475" colspan="4" bgcolor="#fcfcfc" align="left"><font color="#2f2f2f" face="Arial, sans-serif" size="2">${centro}</font></td>
                

                <td width="20">&nbsp;</td>

            </tr>

            <!-- Informação com dados -->



            











          </table>



          <br /><img src="http://aplicacoes.jm.net.br/images/helpdesk/msg_04.gif" width="593" height="1" alt="" style="display:block" border="0"><br />



        <!-- info -->



                </td>

                <td width="20"> </td>

              </tr>

              

              <tr>

                <td height="36"> </td>

                <td><img alt="" border="0" height="1" src="http://aplicacoes.jm.net.br/images/helpdesk/msg_04.gif" style="display:block" width="593" /></td>

                <td> </td>

              </tr>

            </tbody>

          </table>

          </td>

          <td bgcolor="#f2f2f2" width="1"><img alt="" border="0" height="0" src="http://aplicacoes.jm.net.br/images/helpdesk/msg_03.gif" style="display:block" width="1" /></td>

        </tr>

      </tbody>

    </table>

</td>

</tr>

<tr>

<td colspan="2" align="center" bgcolor="#d4d4d4" height="19"> </td>

</tr>

<tr>

<td colspan="2" align="center" bgcolor="#d4d4d4" height="19"><font color="#2f2f2f" face="Arial, sans-serif" size="3"><b>Jalles Machado S/A</b></font><br />

<font color="#2f2f2f" face="Arial, sans-serif" size="2">Departamento de Tecnologia<br />

</td>

</tr>

<tr>

<td colspan="2" align="center" bgcolor="#d4d4d4" height="19"> </td>

</tr>





</tbody>

</table>
</html>


    
    
    
    
    `
}