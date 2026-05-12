const API_URL = "http://4.224.186.213/evaluation-service/logs";

export const Log = async (level:string, packageName:string, message:string) => {
  const logData = {
    stack: "frontend",
    level: level.toLowerCase(),
    package: packageName.toLowerCase(),
    message: message,
  };

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logData),
    });

    console.log("Log sent");
  } catch (error) {
    console.log("Error while logging");
  }
};
