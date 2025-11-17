// send-email.js
const nodemailer = require('nodemailer');

// Configuración del transporter (usando Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,        // Tu email de Gmail (desde GitHub Secrets)
        pass: process.env.EMAIL_APP_PASSWORD // Contraseña de aplicación (desde GitHub Secrets)
    }
});

// Configuración del email
const mailOptions = {
    from: `Tamagochi Virtual <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_DESTINATARIO || process.env.EMAIL_USER, // Email del destinatario
    subject: '🎮 ¡Prueba de notificación desde GitHub Actions!',
    html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 30px;
                    text-align: center;
                    border-radius: 10px 10px 0 0;
                }
                .content {
                    background: #f9f9f9;
                    padding: 30px;
                    border-radius: 0 0 10px 10px;
                }
                .button {
                    display: inline-block;
                    background: #667eea;
                    color: white;
                    padding: 15px 30px;
                    text-decoration: none;
                    border-radius: 5px;
                    margin: 20px 0;
                }
                .footer {
                    text-align: center;
                    color: #999;
                    font-size: 12px;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🎮 Sistema de Notificaciones</h1>
                <p>GitHub Actions + Nodemailer</p>
            </div>
            <div class="content">
                <h2>¡Funciona perfectamente! ✅</h2>
                <p>Este es un email de prueba enviado automáticamente desde <strong>GitHub Actions</strong> usando <strong>Nodemailer</strong>.</p>
                
                <p><strong>Detalles técnicos:</strong></p>
                <ul>
                    <li>📧 Servicio: Gmail SMTP</li>
                    <li>🤖 Ejecutado desde: GitHub Actions</li>
                    <li>⏰ Hora de envío: ${new Date().toLocaleString('es-ES')}</li>
                </ul>
                
                <p style="text-align: center;">
                    <a href="https://github.com" class="button">Ver repositorio en GitHub</a>
                </p>
                
                <div class="footer">
                    <p>Este es un mensaje automático de prueba.</p>
                    <p>Sistema de notificaciones para Tamagochi Virtual</p>
                </div>
            </div>
        </body>
        </html>
    `
};

// Función principal para enviar el email
async function enviarEmail() {
    try {
        console.log('📧 Enviando email de prueba...');
        console.log(`   De: ${process.env.EMAIL_USER}`);
        console.log(`   Para: ${mailOptions.to}`);
        
        const info = await transporter.sendMail(mailOptions);
        
        console.log('✅ Email enviado exitosamente!');
        console.log(`   Message ID: ${info.messageId}`);
        console.log(`   Response: ${info.response}`);
        
        process.exit(0); // Salir con éxito
        
    } catch (error) {
        console.error('❌ Error al enviar el email:', error.message);
        console.error('   Detalles:', error);
        process.exit(1); // Salir con error
    }
}

// Ejecutar
enviarEmail();
