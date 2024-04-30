  <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperando os dados do formulário
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $whatsapp = $_POST['whatsapp'];
    $orcamento = implode(', ', $_POST['orcamento']);
    $mensagem = $_POST['mensagem'];
    
    // Construindo o corpo do email
    $corpo_email = "Email: $email\n";
    $corpo_email .= "Telefone: $telefone\n";
    $corpo_email .= "Whatsapp: $whatsapp\n";
    $corpo_email .= "Lista de Orçamento: $orcamento\n";
    $corpo_email .= "Mensagem: $mensagem\n";
    
    // Configurações para o envio do email
    $destinatario = "leohenna@gmail.com"; // Altere para o seu endereço de email
    $assunto = "Novo formulário de contato";

    // Enviando o email
    mail($destinatario, $assunto, $corpo_email);

    // Redirecionando de volta para a página do formulário
    header('Location: index.html');
} else {
    // Se o método de requisição não for POST, redirecionar de volta para a página do formulário
    header('Location: index.html');
}
?>
