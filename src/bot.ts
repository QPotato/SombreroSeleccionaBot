import * as TelegramBot from 'node-telegram-bot-api';

const welcome_message = 'Bienvenid@ al grupo!\nPara oficializar el ingreso registrate acá: https://forms.gle/333rK4PMqGUpURSbA';

const init = async () => {
    // Create the telegram bot
    if (process.env.TELEGRAM === undefined)
        throw new Error('No telegram token in environment');
    const telegramtoken = process.env.TELEGRAM;
    const bot = new TelegramBot(telegramtoken, { polling: true });
    bot.on('message', (msg: TelegramBot.Message) => {
        if ('new_chat_members' in msg)
            bot.sendMessage(msg.chat.id, welcome_message);
    });
}

init()