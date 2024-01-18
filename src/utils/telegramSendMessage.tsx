interface MessageObject {
  [key: string]: string;
}

const Request = async (message: string) => {
  const botToken = "6669303780:AAElU-RScmnfqZ2sHgS5dNORz01ANzA6j4Y";
  const botChatId = "-4198836116";

  let responseMessage: boolean = false;

  await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${botChatId}&parse_mode=html&text=${message}&disable_web_page_preview=true`
  ).then((response) => {
    if (response.ok) {
      responseMessage = true;
    } else {
      responseMessage = false;
    }
  });

  return responseMessage;
};

const renderMessage = (obj: MessageObject) => {
  let message = "";

  Object.keys(obj).map((e: string) => {
    message += "<b>" + e + "</b>" + obj[e] + "%0A";
  });

  return message.replace(/[&]/g, "");
};

const SendMessage = async (obj: MessageObject) => {
  let message = renderMessage(obj);

  let request: boolean = await Request(message);

  return request;
};

export default SendMessage;
