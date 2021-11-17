module.exports = [{
name: "slot",
aliases: ['gamble','slots','slott'],
 category: 'fun',
 description: 'slot game',
 code: `
$reactionCollector[$splitText[1];$authorID;10s;<a:load:910503392558866512>;start;yes]
$textSplit[$sendMessage[{author:$username's slot game:$replaceText[$replaceText[$userAvatar[$authorid];null;$servericon];$servericon;null;$userAvatar[$clientid]]}
{color:AQUA}
{thumbnail:$replaceText[$replaceText[$userAvatar[$authorid];null;$servericon];$servericon;null;$userAvatar[$clientid]]}
{description:
**__Bet amount_**: \`$numberSeparator[$message;,]\`

**Spinning the wheel**
> <a:owoslot:910491250786971648> <a:owoslot:910491250786971648> <a:owoslot:910491250786971648>
};yes]; ]
$setGlobalUserVar[slotbet;$message]
$onlyIf[$isNumber[$message]==true;:x: Not a Number]
$onlyIf[$checkContains[$message;-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Please do noy use symbols]`
}, {
 type: 'awaitedCommand',
 name: 'start',
 code: `$if[$randomText[win;lose;lost;winn]==win]
$color[GREEN] $footer[Champion] $thumbnail[$userAvatar[899810192621961216]] $author[You won] $description[ 
**_Amount won_**: \`$numberSeparator[$getGlobalUserVar[slotbet];,]\`

> $randomText[<:eggplant:910492202646532156>;<:cherries:910492480552697866>;<:heartt:910492753597722634>] $randomText[<:eggplant:910492202646532156>;<:cherries:910492480552697866>;<:heartt:910492753597722634>] $randomText[<:eggplant:910492202646532156>;<:cherries:910492480552697866>;<:heartt:910492753597722634>]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getGlobalUserVar[slotbet]]]
$cooldown[12s;]
$else
$if[$randomText[win;lose;lost;winn]==lost]
$color[RED] $footer[Loser] $thumbnail[$userAvatar[899810192621961216]}] $author[You lost :(] $description[ 
**_Amount lost_**: \`$numberSeparator[$getGlobalUserVar[slotbet];,]\`

> $randomText[<:cherries:910492480552697866>;<:heartt:910492753597722634>;<:eggplant:910492202646532156>] $randomText[<:eggplant:910492202646532156>;<:heartt:910492753597722634>;<:cherries:910492480552697866>] $randomText[<:eggplant:910492202646532156>;<:cherries:910492480552697866>;<:heartt:910492753597722634>] <]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$getGlobalUserVar[slotbet]]]
$cooldown[12s;]
$else
$if[$randomText[win;lose;lost;winn]==winn]
$color[GREEN] $footer[Champion] $thumbnail[$userAvatar[899810192621961216]] $author[You won] $description[ 
**_Amount won_**: \`$numberSeparator[$getGlobalUserVar[slotbet];,]\`

> $randomText[<:eggplant:910492202646532156>;<:cherries:910492480552697866>;<:heartt:910492753597722634>] $randomText[<:eggplant:910492202646532156>;<:cherries:910492480552697866>;<:heartt:910492753597722634>] $randomText[<:eggplant:910492202646532156>;<:cherries:910492480552697866>;<:heartt:910492753597722634>]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getGlobalUserVar[slotbet]]]
$cooldown[12s;]
$endif
$endif
$endif
`
}]
