import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderAlternative';
import { TextArea } from '../PrivacyTerms/styles';

const Faq = () => {
  return (
    <Container>
      <HeaderPage page_title={'Dúvidas Frequentes'} />
      <TextArea>
        <h1>1. Esta loja online é real?</h1>
        <p>
          Não, esta loja online é parte de um projeto de portfólio e não
          comercializa produtos de forma real. Ela foi criada com o propósito de
          demonstrar habilidades e experiência em design e desenvolvimento de
          sites.
        </p>
        <h1>2. Posso comprar produtos nesta loja?</h1>
        <p>
          Não, esta loja online é apenas para fins de demonstração e não realiza
          vendas reais de produtos eletrônicos.
        </p>
        <h1>
          3. Por que devo navegar nesta loja online se não posso comprar nada?
        </h1>
        <p>
          Nossa loja online oferece uma experiência simulada de compras para que
          os visitantes possam explorar a interface e o funcionamento de um site
          de comércio eletrônico. É uma ótima oportunidade para praticar
          navegação e familiarizar-se com os recursos típicos de uma loja
          online.
        </p>
        <h1>4. Os produtos exibidos são reais?</h1>
        <p>
          Os produtos exibidos nesta loja online são reais, porém não podem ser
          comprados nesse site, visto que é um site ilustrativa, na qual possui
          todas as funcionalidades de um marketplace real, mas não executa
          compras reais, visto que é apenas um portfólio.
        </p>
        <h1>5. Posso criar uma conta de usuário nesta loja?</h1>
        <p>
          Sim, você pode criar uma conta de usuário para simular o processo de
          registro e login em uma loja online. No entanto, é importante lembrar
          que qualquer informação fornecida durante esse processo não será
          utilizada para transações reais.
        </p>
        <h1>6. Como posso entrar em contato se tiver alguma dúvida?</h1>
        <p>
          Se você tiver alguma dúvida ou preocupação, sinta-se à vontade para
          entrar em contato conosco através do seguinte endereço de e-mail:
          lucas.lfs2004@gmail.com. Teremos prazer em ajudá-lo com qualquer
          questão relacionada à nossa loja online.
        </p>
        <h1>
          7. Posso compartilhar os produtos desta loja online em minhas redes
          sociais?
        </h1>
        <p>
          Sim, você pode compartilhar os produtos e páginas desta loja online em
          suas redes sociais se desejar. No entanto, lembre-se de que esta é uma
          loja fictícia e os produtos exibidos não estão disponíveis para compra
          real.
        </p>
        <h1>8. Como faço para sair da minha conta de usuário?</h1>
        <p>
          Para sair da sua conta de usuário, basta clicar no link "Sair" ou
          "Logout" localizado no menu ou na área de perfil, dependendo do layout
          da página.
        </p>
        <h1>9. Esta loja online utiliza cookies?</h1>
        <p>
          Sim, esta loja online pode utilizar cookies para melhorar sua
          experiência de navegação. Você pode optar por aceitar ou recusar
          cookies através das configurações do seu navegador.
        </p>
        <h1>10. Quem está por trás desta loja online?</h1>
        <p>
          Esta loja online foi desenvolvida por Lucas Ferreira Silva como parte
          de seu portfólio pessoal. Se você tiver alguma dúvida ou feedback,
          sinta-se à vontade para entrar em contato através do endereço de
          e-mail anteriormente.
        </p>
      </TextArea>
      <Footer />
    </Container>
  );
};

export default Faq;
