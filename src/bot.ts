import * as TelegramBot from 'node-telegram-bot-api';

const init = async () => {
    // Create the telegram bot
    if (process.env.TELEGRAM === undefined)
        throw new Error('No telegram token in environment');
    const telegramtoken = process.env.TELEGRAM;
    const bot = new TelegramBot(telegramtoken, { polling: true });
    bot.on('message', (msg: TelegramBot.Message) => {
        if (msg.new_chat_members !== undefined && !msg.new_chat_members[0].is_bot) {
            const welcome_message = `Bienvenidx al grupo @${msg.new_chat_members[0].username}!\nPara oficializar el ingreso registrate acá: https://forms.gle/333rK4PMqGUpURSbA`;
            bot.sendMessage(msg.chat.id, welcome_message);
        }
    });
    bot.onText(/\/lista/, (msg) => {
        bot.sendMessage(msg.chat.id, 'https://docs.google.com/forms/d/e/1FAIpQLSdk96jjuIbx5qa-9wWR3HMLynBgqwaiJeqeHeChv3opbUiGZA/viewanalytics')
    });
}

init()