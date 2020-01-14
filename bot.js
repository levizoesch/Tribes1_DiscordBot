var Discord = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');
var express = require('express');

class messageDetails {
    constructor(message) {
        this.messageData = message;
    }

    get getSenderUsername() {
        return this.messageData.author.username;
    }

    get getSenderAvatarURL() {
        return this.messageData.author.avatarURL;
    }

}

// Configure logger settings
logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {
    colorize: true
});

const Client = new Discord.Client();

Client.once('ready', () => {
    console.log('Krayvoks is Ready!');
});

Client.on('message', msg => {

    if (msg.content.startsWith('!kick')) {

        if (msg.mentions.users.size) {

            const taggedUser = msg.mentions.users.first();

            msg.channel.send(`You wanted to kick: ${taggedUser.username}`).catch(console.error);

        } else {

            msg.reply('Please tag a valid user!').catch(console.error);

        }

    }
    else if (msg.content.startsWith('!last')) {

        function winningTeam(team) {

            if (team === '0') {
                return 'BE';
            } else if (team === '2') {
                return 'Tie';
            }
            else {
                return 'DS';
            }
        }
        const http = require('http');

        let TodaysGamesAPI = 'http://krayvok.com/tribes/api/game/today/games';

        http.get(TodaysGamesAPI,(resp) => {

            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                let x = JSON.parse(data);
                const embed = new Discord.RichEmbed();
                let gameCounter = 0;
                for(let a in x) {
                    if (gameCounter >= 1) {
                        break;
                    }
                    else {

                        embed.addField(`<:trophy:666496020691157012> ${winningTeam(x[a].winning_team)} | Pickup # ${x[a].pickup_id} `, `${x[a].mission_name} | ${x[a].created_at}`);

                        embed.addField(`S | K | D | S | DK | CK | GK | CapK | FR | FC | AFC | FG | FP | MA | FT | Name | Team | Rating`, `${x[a].players[1]['team_score']} | ${x[a].players[1]['kills']} | ${x[a].players[1]['deaths']} | ${x[a].players[1]['suicide']} | ${x[a].players[1]['disc_kill']} | ${x[a].players[1]['chain_kill']} | ${x[a].players[1]['gernade_kill']} | ${x[a].players[1]['capper_kill']} | ${x[a].players[1]['flag_return']} | ${x[a].players[1]['flag_cap']} | ${x[a].players[1]['assist_flag_cap']} | ${x[a].players[1]['flag_grab']} | ${x[a].players[1]['flag_pickup']} | ${x[a].players[1]['midairs']} | ${x[a].players[1]['flag_time']} | ${x[a].players[1]['name']} | ${winningTeam(x[a].players[1]['team'])} | ${x[a].players[1]['rating']} |`);
                        embed.addField(`. `, `${x[a].players[2]['team_score']} | ${x[a].players[2]['kills']} | ${x[a].players[2]['deaths']} | ${x[a].players[2]['suicide']} | ${x[a].players[2]['disc_kill']} | ${x[a].players[2]['chain_kill']} | ${x[a].players[2]['gernade_kill']} | ${x[a].players[2]['capper_kill']} | ${x[a].players[2]['flag_return']} | ${x[a].players[2]['flag_cap']} | ${x[a].players[2]['assist_flag_cap']} | ${x[a].players[2]['flag_grab']} | ${x[a].players[2]['flag_pickup']} | ${x[a].players[2]['midairs']} | ${x[a].players[2]['flag_time']} | ${x[a].players[2]['name']} | ${winningTeam(x[a].players[2]['team'])} | ${x[a].players[2]['rating']} |`);
                        embed.addField(`. `, `${x[a].players[3]['team_score']} | ${x[a].players[3]['kills']} | ${x[a].players[3]['deaths']} | ${x[a].players[3]['suicide']} | ${x[a].players[3]['disc_kill']} | ${x[a].players[3]['chain_kill']} | ${x[a].players[3]['gernade_kill']} | ${x[a].players[3]['capper_kill']} | ${x[a].players[3]['flag_return']} | ${x[a].players[3]['flag_cap']} | ${x[a].players[3]['assist_flag_cap']} | ${x[a].players[3]['flag_grab']} | ${x[a].players[3]['flag_pickup']} | ${x[a].players[3]['midairs']} | ${x[a].players[3]['flag_time']} | ${x[a].players[3]['name']} | ${winningTeam(x[a].players[3]['team'])} | ${x[a].players[3]['rating']} |`);
                        embed.addField(`. `, `${x[a].players[4]['team_score']} | ${x[a].players[4]['kills']} | ${x[a].players[4]['deaths']} | ${x[a].players[4]['suicide']} | ${x[a].players[4]['disc_kill']} | ${x[a].players[4]['chain_kill']} | ${x[a].players[4]['gernade_kill']} | ${x[a].players[4]['capper_kill']} | ${x[a].players[4]['flag_return']} | ${x[a].players[4]['flag_cap']} | ${x[a].players[4]['assist_flag_cap']} | ${x[a].players[4]['flag_grab']} | ${x[a].players[4]['flag_pickup']} | ${x[a].players[4]['midairs']} | ${x[a].players[4]['flag_time']} | ${x[a].players[4]['name']} | ${winningTeam(x[a].players[4]['team'])} | ${x[a].players[4]['rating']} |`);
                        embed.addField(`. `, `${x[a].players[5]['team_score']} | ${x[a].players[5]['kills']} | ${x[a].players[5]['deaths']} | ${x[a].players[5]['suicide']} | ${x[a].players[5]['disc_kill']} | ${x[a].players[5]['chain_kill']} | ${x[a].players[5]['gernade_kill']} | ${x[a].players[5]['capper_kill']} | ${x[a].players[5]['flag_return']} | ${x[a].players[5]['flag_cap']} | ${x[a].players[5]['assist_flag_cap']} | ${x[a].players[5]['flag_grab']} | ${x[a].players[5]['flag_pickup']} | ${x[a].players[5]['midairs']} | ${x[a].players[5]['flag_time']} | ${x[a].players[5]['name']} | ${winningTeam(x[a].players[5]['team'])} | ${x[a].players[5]['rating']} |`);
                        embed.addField(`. `, `${x[a].players[6]['team_score']} | ${x[a].players[6]['kills']} | ${x[a].players[6]['deaths']} | ${x[a].players[6]['suicide']} | ${x[a].players[6]['disc_kill']} | ${x[a].players[6]['chain_kill']} | ${x[a].players[6]['gernade_kill']} | ${x[a].players[6]['capper_kill']} | ${x[a].players[6]['flag_return']} | ${x[a].players[6]['flag_cap']} | ${x[a].players[6]['assist_flag_cap']} | ${x[a].players[6]['flag_grab']} | ${x[a].players[6]['flag_pickup']} | ${x[a].players[6]['midairs']} | ${x[a].players[6]['flag_time']} | ${x[a].players[6]['name']} | ${winningTeam(x[a].players[6]['team'])} | ${x[a].players[6]['rating']} |`);
                        embed.addField(`. `, `${x[a].players[7]['team_score']} | ${x[a].players[7]['kills']} | ${x[a].players[7]['deaths']} | ${x[a].players[7]['suicide']} | ${x[a].players[7]['disc_kill']} | ${x[a].players[7]['chain_kill']} | ${x[a].players[7]['gernade_kill']} | ${x[a].players[7]['capper_kill']} | ${x[a].players[7]['flag_return']} | ${x[a].players[7]['flag_cap']} | ${x[a].players[7]['assist_flag_cap']} | ${x[a].players[7]['flag_grab']} | ${x[a].players[7]['flag_pickup']} | ${x[a].players[7]['midairs']} | ${x[a].players[7]['flag_time']} | ${x[a].players[7]['name']} | ${winningTeam(x[a].players[7]['team'])} | ${x[a].players[7]['rating']} |`);
                        embed.addField(`. `, `${x[a].players[8]['team_score']} | ${x[a].players[8]['kills']} | ${x[a].players[8]['deaths']} | ${x[a].players[8]['suicide']} | ${x[a].players[8]['disc_kill']} | ${x[a].players[8]['chain_kill']} | ${x[a].players[8]['gernade_kill']} | ${x[a].players[8]['capper_kill']} | ${x[a].players[8]['flag_return']} | ${x[a].players[8]['flag_cap']} | ${x[a].players[8]['assist_flag_cap']} | ${x[a].players[8]['flag_grab']} | ${x[a].players[8]['flag_pickup']} | ${x[a].players[8]['midairs']} | ${x[a].players[8]['flag_time']} | ${x[a].players[8]['name']} | ${winningTeam(x[a].players[8]['team'])} | ${x[a].players[8]['rating']} |`);
                        embed.addField(`. `, `${x[a].players[9]['team_score']} | ${x[a].players[9]['kills']} | ${x[a].players[9]['deaths']} | ${x[a].players[9]['suicide']} | ${x[a].players[9]['disc_kill']} | ${x[a].players[9]['chain_kill']} | ${x[a].players[9]['gernade_kill']} | ${x[a].players[9]['capper_kill']} | ${x[a].players[9]['flag_return']} | ${x[a].players[9]['flag_cap']} | ${x[a].players[9]['assist_flag_cap']} | ${x[a].players[9]['flag_grab']} | ${x[a].players[9]['flag_pickup']} | ${x[a].players[9]['midairs']} | ${x[a].players[9]['flag_time']} | ${x[a].players[9]['name']} | ${winningTeam(x[a].players[9]['team'])} | ${x[a].players[9]['rating']} |`);
                        embed.addField(`. `, `${x[a].players[10]['team_score']} | ${x[a].players[10]['kills']} | ${x[a].players[10]['deaths']} | ${x[a].players[10]['suicide']} | ${x[a].players[10]['disc_kill']} | ${x[a].players[10]['chain_kill']} | ${x[a].players[10]['gernade_kill']} | ${x[a].players[10]['capper_kill']} | ${x[a].players[10]['flag_return']} | ${x[a].players[10]['flag_cap']} | ${x[a].players[10]['assist_flag_cap']} | ${x[a].players[10]['flag_grab']} | ${x[a].players[10]['flag_pickup']} | ${x[a].players[10]['midairs']} | ${x[a].players[10]['flag_time']} | ${x[a].players[10]['name']} | ${winningTeam(x[a].players[10]['team'])} |  ${x[a].players[10]['rating']} |`);
                    }
                    embed.setFooter('www.Krayvok.com','');
                    gameCounter++;
                }
                msg.mentions.users.first().send(embed);

//                msg.channel.send(embed).catch(console.error);
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });

    }
    else if (msg.content.startsWith('!lastgames')) {

        function winningTeam(team) {

            if (team === '0') {
                return 'BE';
            } else if (team === '2') {
                return 'Tie';
            }
            else {
                return 'DS';
            }
        }
        const http = require('http');

        let TodaysGames = 'http://krayvok.com/tribes/api/game/today/games';

        http.get(TodaysGames,(resp) => {

            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                let x = JSON.parse(data);
                const embed = new Discord.RichEmbed();
                let gameCounter = 0;
                for(let a in x) {
                    if (gameCounter >= 5) {
                        break;
                    }
                    else {
                        embed.addField(`<:trophy:666496020691157012> ${winningTeam(x[a].winning_team)} | Pickup # ${x[a].pickup_id} `, `${x[a].mission_name} | ${x[a].created_at}`);
                    }
                    embed.setFooter('www.Krayvok.com','');
                    gameCounter++;
                }
                msg.mentions.users.first().send(embed);

//                msg.channel.send(embed).catch(console.error);
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });

    }
});

Client.login(auth.token);