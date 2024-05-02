import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import * as C from './styles';

const PrivacyTerms = () => {
  return (
    <Container>
      <HeaderPage page_title={'Termos de privacidade'} />
      <C.TextArea>
        <h1>Termo de Privacidade e Compromisso</h1>
        <p>
          Bem-vindo à nossa loja online de produtos eletrônicos. Este documento
          estabelece as diretrizes para o uso de seus dados pessoais e nosso
          compromisso com sua privacidade.
        </p>
        <h1>Coleta de Informações:</h1>
        <p>
          Ao utilizar nossa loja online, podemos coletar informações pessoais
          que você voluntariamente nos fornece, como nome, endereço de e-mail e
          informações de pagamento. No entanto, é importante ressaltar que nossa
          loja online é apenas um projeto de portfólio e não comercializa
          produtos. Portanto, qualquer informação fornecida é estritamente para
          fins de demonstração e não será utilizada para realizar transações
          reais.
        </p>
        <h1>Uso de Informações:</h1>
        <p>
          As informações coletadas serão utilizadas apenas para o propósito de
          fornecer uma experiência de navegação adequada em nosso site. Não
          compartilharemos, venderemos ou alugaremos suas informações pessoais a
          terceiros. Nós nos comprometemos a proteger suas informações pessoais
          e a utilizá-las exclusivamente para os fins descritos neste documento.
        </p>
        <h1>Segurança:</h1>
        <p>
          Adotamos medidas de segurança adequadas para proteger suas informações
          pessoais contra acesso não autorizado, alteração, divulgação ou
          destruição não autorizada dos dados.
        </p>
        <h1>Cookies:</h1>
        <p>
          Nosso site pode utilizar cookies para melhorar sua experiência de
          navegação. Os cookies são pequenos arquivos de texto armazenados no
          seu dispositivo para auxiliar na análise do tráfego da web ou para
          personalizar sua experiência online. Você pode optar por recusar
          cookies através das configurações do seu navegador, no entanto, isso
          pode afetar a funcionalidade do site.
        </p>
        <h1>Menores de Idade:</h1>
        <p>
          Nosso site não se destina a menores de 18 anos e não coletamos
          intencionalmente informações pessoais de pessoas com menos de 18 anos.
          Se você é menor de idade, por favor, não nos forneça informações
          pessoais.
        </p>
        <h1>Alterações nesta Política:</h1>
        <p>
          Reservamo-nos o direito de atualizar ou modificar este termo de
          privacidade a qualquer momento, e é sua responsabilidade revisar esta
          política periodicamente. O uso continuado do site após qualquer
          alteração nesta política constituirá sua aceitação de tais alterações.
        </p>
        <h1>Contato:</h1>
        <p>
          Se você tiver alguma dúvida ou preocupação sobre este termo de
          privacidade e compromisso, entre em contato conosco através do
          seguinte endereço de e-mail: lucas.lfs@004@gmail.com. Ao utilizar
          nossa loja online, você concorda com os termos estabelecidos neste
          termo de privacidade e compromisso. Obrigado por visitar nossa loja
          online de produtos eletrônicos. Atenciosamente, Sillicon Store
        </p>
      </C.TextArea>
      <Footer />
    </Container>
  );
};

export default PrivacyTerms;
