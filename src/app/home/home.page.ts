import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    dictionary = [];

    constructor() {
        this.initializeItems();
    }

    search(ev: any) {

        this.initializeItems();

        const val = ev.target.value;
        if (val && val.trim() != '') {
            this.dictionary = this.dictionary.filter((item) => {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }

    }

    initializeItems() {

        this.dictionary = [
            {
                "id": 989,
                "title": "A Bangu",
                "description": "1. De qualquer forma, jeito, de forma grosseira, tosca, às pressas. Ex.: O gaudério se pilchou a bangu (se pilchou às pressas, de forma descuidada, mal acabada).\n2. De forma descontrolada, sem limites. Ex.: \"Já no final do baile, o bolicheiro começou a me servir canha a bangu!\" (servir à vontade).",
                "contribution": []
            },
            {
                "id": 961,
                "title": "A La Cria",
                "description": "Se mandar a La Cria significa se mandar a Deus-dará, sem rumo, cair no mundo. \n\nEx: Ele se mandou a la cria para os EUA, mas nunca esteve por lá.",
                "contribution": [
                    "nem conhecia"
                ]
            },
            {
                "id": 582,
                "title": "A la fresca",
                "description": "Exprime admiração, espanto, surpresa, descrença. ",
                "contribution": []
            },
            {
                "id": 411,
                "title": "A la pucha",
                "description": "Segundo o site http:\/\/www.alapucha.com.br : Quem é gaúcho certamente já ouviu essa expressão. Usada tradicionalmente quando algo nos pega de surpresa, nos espanta ou nos encanta.",
                "contribution": [
                    "Esta palavra pode ser considerada um sinônimo da expressão \"puta merda\"."
                ]
            },
            {
                "id": 587,
                "title": "A La Pucha, tchê!",
                "description": "Exprime admiração, espanto! Quando algo pega o vivente de revesgueio, de surpresa!",
                "contribution": []
            },
            {
                "id": 671,
                "title": "A troco?",
                "description": "Usado no sentido de “por quê?”, “para quê?”. \nExemplo de uso: \"A troco de que tu fez isso?\"",
                "contribution": []
            },
            {
                "id": 602,
                "title": "A vaca foi pro brejo",
                "description": "Ja era, não vai mais dar certo ou acontecer algo",
                "contribution": []
            },
            {
                "id": 2,
                "title": "Abagualado",
                "description": "Aquele que é bagual, arisco, sestroso, espantadiço. Adjetivo dado ao indivíduo grosseiro, inculto, rústico, amatutado, selvagem.",
                "contribution": [
                    "conheço essa expressão, mas tenho costume de usá-la"
                ]
            },
            {
                "id": 608,
                "title": "Abaralhar",
                "description": "Agarrar, pegar não deixar cair ao solo.",
                "contribution": []
            },
            {
                "id": 751,
                "title": "Abatumado",
                "description": "Um bolo ou pão que não cresceu; pessoa que está desanimada...",
                "contribution": []
            },
            {
                "id": 3,
                "title": "Abichornado",
                "description": "Sinônimo de chateado, doente, deprimido...",
                "contribution": []
            },
            {
                "id": 20,
                "title": "Abocanhar",
                "description": "Apoderar-se indevidamente de alguma coisa.",
                "contribution": []
            },
            {
                "id": 466,
                "title": "Aboletar-se",
                "description": "Instalar-se. Ocupar, indevidamente, determinado lugar.",
                "contribution": []
            },
            {
                "id": 21,
                "title": "Aborrir-se",
                "description": "Verbo português muito utilizado em certos lugares do Estado. Significa aborrecer-se, ficar triste, tornar-se melancólico.",
                "contribution": [
                    "Tem origem no espanhol 'aburrir'. Também usado como tédio. Aburrido - entediado."
                ]
            },
            {
                "id": 383,
                "title": "Abostado",
                "description": "Abobado, bobo, que tem bosta na cabeça, sem juízo.",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/111008985"
                ]
            },
            {
                "id": 871,
                "title": "Abrir a graxeira",
                "description": "Falar tudo o que sabe ou o ato de vomitar. \n\n*Contribuição do Alfabeto de Quaraí. ",
                "contribution": []
            },
            {
                "id": 611,
                "title": "Acabrunhado",
                "description": "Entristecido, desanimado, ...",
                "contribution": []
            },
            {
                "id": 981,
                "title": "Acadelar",
                "description": "Se esconder, ficar com medo, desistir",
                "contribution": []
            },
            {
                "id": 921,
                "title": "Acadelhar",
                "description": "Pessoa fica se fazendo para ir em algum lugar ou fazer alguma coisa",
                "contribution": []
            },
            {
                "id": 872,
                "title": "Acalambrado",
                "description": "Intimidado, amedrontado. \n\n*Contribuição do Alfabeto de Quaraí. ",
                "contribution": []
            },
            {
                "id": 376,
                "title": "açoitar",
                "description": "= bater, surrar",
                "contribution": [
                    "Açoitar no sentido de surrar não é regionalismo, faz parte da língua portuguesa e tem orígem árabe. "
                ]
            },
            {
                "id": 579,
                "title": "Acoleirado",
                "description": "Unido o animal a outro pela coleira. Andar uma pessoa acoleirada com outra. Significa andar uma pessoa sempre junto de outra",
                "contribution": []
            },
            {
                "id": 478,
                "title": "Acolherar",
                "description": "Juntar, unir, aparceirar.",
                "contribution": []
            },
            {
                "id": 873,
                "title": "Acoxambrar",
                "description": "Fazer corpo mole, preguiçoso. \n\n*Contribuição do Alfabeto de Quaraí. ",
                "contribution": []
            },
            {
                "id": 580,
                "title": "Acrocar",
                "description": "Acocorar-se, pôr-se de cócoras.",
                "contribution": []
            },
            {
                "id": 23,
                "title": "Acuar",
                "description": "Latir o cão.",
                "contribution": []
            },
            {
                "id": 860,
                "title": "Acuierá",
                "description": "Muito usada para bailes. O mesmo que aglomeração, juntamento.\n\"Hoje a noite vamos todos nos acuierá no Clube Farrapos\". ",
                "contribution": []
            },
            {
                "id": 22,
                "title": "Afilar",
                "description": "Caçoar, dar vaia, troçar com alguém.",
                "contribution": []
            },
            {
                "id": 4,
                "title": "Afocinhar",
                "description": "Quem “afocinhou” é porque caiu de nariz no chão, tropeçou.",
                "contribution": []
            },
            {
                "id": 361,
                "title": "Afofar",
                "description": "Exagerar, fazer algo em demasia ou com rapidez. Ex.: \"Afofei na bóia\" (Exagerei na comida). Pedido para alguém acelerar a velocidade da viagem: \"Afofa, senão a gente se atrasa\".",
                "contribution": []
            },
            {
                "id": 299,
                "title": "Afrouxar",
                "description": "recuar por medo, acovardar-se, arrolhar. Usa-se em sentido figurado, afrouxar a ponta, como conceder certas liberdades que, no geral descambam para o abuso. ",
                "contribution": []
            },
            {
                "id": 337,
                "title": "Afudê",
                "description": "[subst.] Legal, bom. Exemplo: \"Bah, que afude essa música.\"",
                "contribution": [
                    "Também usado na versão \"preguiçosa\" - AFU!"
                ],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/60623154",
                    "https:\/\/api.soundcloud.com\/tracks\/71687642",
                    "https:\/\/api.soundcloud.com\/tracks\/122203307"
                ]
            },
            {
                "id": 581,
                "title": "Agalhas",
                "description": "Velhacaria, trampolinice, parlapatice, fanfarrice.",
                "contribution": []
            },
            {
                "id": 5,
                "title": "Agalhudo",
                "description": "É o indivíduo esforçado, audacioso, forte, ousado.",
                "contribution": []
            },
            {
                "id": 590,
                "title": "Agnoline",
                "description": "Capeletti dos gringos da Serra.",
                "contribution": []
            },
            {
                "id": 874,
                "title": "Aguinaldo",
                "description": "Décimo terceiro salário. 'Já recebeste o Aguinaldo?'\n\n*Contribuição do Alfabeto de Quaraí\". ",
                "contribution": []
            },
            {
                "id": 789,
                "title": "Ajojado",
                "description": "Atado por ajoujo, amarrado junto, unido lado a lado. ",
                "contribution": [
                    "Pode ser também \"cansado\". Ficar de ajojo, ficar ajojado. "
                ]
            },
            {
                "id": 788,
                "title": "Ajoujo",
                "description": "Tira fina de couro usada para prender ou atar coisas ",
                "contribution": []
            },
            {
                "id": 6,
                "title": "Ajudanta",
                "description": "Mulher que presta ajuda em qualquer serviço.",
                "contribution": []
            },
            {
                "id": 7,
                "title": "Ajupe",
                "description": "Termo utilizado por tropeiros para estimular os animais.",
                "contribution": []
            },
            {
                "id": 696,
                "title": "Ala pucha tchê!",
                "description": "Expressão usada quando se surpreende com algo.",
                "contribution": []
            },
            {
                "id": 297,
                "title": "alambrado",
                "description": "campo alambrado é o que está fechado por cerca de arame. ",
                "contribution": [
                    "alambrado me lembra o jogo de bola. o futebol de várzea que muito joguei."
                ]
            },
            {
                "id": 772,
                "title": "Alarido",
                "description": "Conversa alta; muita gente falando alto, ao mesmo tempo.",
                "contribution": [
                    "Alarido no sentido de barulho de vozes não é regionalismo, trata-se de uma palavra portuguesa com datação do séc XIV, antes do Brasil ser descoberto. "
                ]
            },
            {
                "id": 583,
                "title": "Alarifagem",
                "description": "Ação de alarife. Qualidade do alarife. Proeza do alarife. Esperteza, velhacagem, trapaça.",
                "contribution": []
            },
            {
                "id": 1066,
                "title": "Alarife",
                "description": "Sinônimo de: malandro, embusteiro, escorregadio, viscoso, espertalhão.",
                "contribution": []
            },
            {
                "id": 753,
                "title": "Alarifo",
                "description": "Desconfiado, espantado...",
                "contribution": []
            },
            {
                "id": 385,
                "title": "alarmento",
                "description": "Pessoa que chega falando gritando em um local.",
                "contribution": []
            },
            {
                "id": 452,
                "title": "alçada",
                "description": "quando a cadela entra no cio.\nex.: a cadela está alçada.",
                "contribution": []
            },
            {
                "id": 414,
                "title": "Alcaide",
                "description": "O mesmo que arcaide, que não vale nada pronunciada no interior",
                "contribution": []
            },
            {
                "id": 24,
                "title": "Alcatra",
                "description": "A parte da rês constituída pelos ossos da bacia e acompanhados de alguma carne. Também significa assento: “... e quando se aproximou com a alcatra esbandalhada...”.",
                "contribution": []
            },
            {
                "id": 8,
                "title": "Alegrete",
                "description": "Termo utilizado para se referir àquele que, levemente embriagado, manifesta alegria.",
                "contribution": []
            },
            {
                "id": 670,
                "title": "Alertar os gansos",
                "description": "Dar alarme sobre algo. Despertar a atenção indesejadamente.",
                "contribution": []
            },
            {
                "id": 408,
                "title": "Alevanta",
                "description": "Corruptela da conjugação \"levante\" do verbo \"levantar\". Ex: \"Alevanta, guri! Sai desta cama que o sol já nasceu!\"",
                "contribution": []
            },
            {
                "id": 1026,
                "title": "Aligeirar",
                "description": "Ir mais rápido, se apressar. Ex: Te aligeira, guri. (Vamos rápido, te apressa). ",
                "contribution": []
            },
            {
                "id": 802,
                "title": "Alpargatas",
                "description": "Alpargata é um calçado do tipo sapatilha, feita em brim ou lona, com solado de corda ou borracha, e que pode ser preso ao pé por meio de tiras de couro, corda ou pano.\nTeve origem entre os trabalhadores das docas, na França (espadrille) e na Espanha (alpargata). Foi moda na década de 1980.\nAs alpargatas podem ser usadas tanto por homens como por mulheres. Pode servir também como substituto da bota no traje típico dos gaúchos.",
                "contribution": []
            },
            {
                "id": 25,
                "title": "Amanar",
                "description": "Ficar mano a mano no jogo; ficar em igualdade de condições.",
                "contribution": []
            },
            {
                "id": 1023,
                "title": "Amanda bobona",
                "description": "\"Amanda bobona\" significa Menina levada, bobinha, brincalhona e muito lezinha, mas amável e muito especial.",
                "contribution": []
            },
            {
                "id": 9,
                "title": "Amargo",
                "description": "Como o mate chimarrão é chamado no Rio Grande do Sul. Mate amargo, mate sem açúcar.",
                "contribution": []
            },
            {
                "id": 1034,
                "title": "Amasiado",
                "description": "Diz-se do homem que possui uma relação estável, porém não oficializada pelo matrimônio",
                "contribution": []
            },
            {
                "id": 1000,
                "title": "Amolado",
                "description": "Sinônimo de doente",
                "contribution": [
                    "Amolar também pode ser incomodar. \"Não me amola, guri\"",
                    "Amolar também pode ser incomodar. \"Não me amola, guri\""
                ]
            },
            {
                "id": 726,
                "title": "Amuado",
                "description": "Triste. Melancólico.",
                "contribution": [
                    "Eu sempre falo isso quando algum amigo meu fica muito quieto ou meio triste kk"
                ]
            },
            {
                "id": 930,
                "title": "Andaço",
                "description": "Diarréia forte e duradoura",
                "contribution": []
            },
            {
                "id": 628,
                "title": "Aperriar",
                "description": "Ato de incomodar, apressar",
                "contribution": []
            },
            {
                "id": 10,
                "title": "Aplastado",
                "description": "Aquele que está cansado, abatido, esmorecido, fatigado, desanimado.",
                "contribution": []
            },
            {
                "id": 512,
                "title": "aprochega",
                "description": "1- se aproximar, chegar perto\nEx: te aprochega ai e toma um mate tche\n",
                "contribution": []
            },
            {
                "id": 646,
                "title": "Aprochegar",
                "description": "Chegar perto, unir-se.\n\"Te aprochega aí vivente.\"",
                "contribution": []
            },
            {
                "id": 1038,
                "title": "Apruma",
                "description": "Arrumar\/Ajeitar.... Te aprume índio veio que o baile hoje começa antes",
                "contribution": []
            },
            {
                "id": 1061,
                "title": "Apurar",
                "description": "apurar\nvtd e vpr Reg (Rio Grande do Sul) 1 Apressar o passo. 2 Dar mais pressa ao que está fazendo. 3 Ficar sobrecarregado de serviço.",
                "contribution": []
            },
            {
                "id": 11,
                "title": "Aquerenciado",
                "description": "Termo utilizado para se referir a um animal que está acostumando a viver em determinado lugar, ou em companhia de outros animais. Também é utilizado para se referir a pessoas.",
                "contribution": []
            },
            {
                "id": 400,
                "title": "Aragano",
                "description": "Pessoa sem rumo, preguiçosa, vagabundo.",
                "contribution": []
            },
            {
                "id": 1046,
                "title": "aragem",
                "description": "Em gauchês, sinônimo de neblina fria, \"sereno\", orvalho. Assim, quando a mãe manda o guri entrar pra dentro de casa por causa do frio, ela diz: \"Sai do sereno guri!\" ou \"Sai dessa aragem, vai pegar uma gripe!\".",
                "contribution": []
            },
            {
                "id": 866,
                "title": "Araqüê",
                "description": "Expressão de indignação muito antiga, com o mesmo significado de \"oras pois\", \"que droga\", etc. Pode ser vista no filme \"Anahy de las Misiones\", que retrata a fala gaúcha na época da Guerra dos Farrapos, no que se chamou de dialeto guasca. Ainda usada em locais interioranos da região das Missões hoje em dia.",
                "contribution": []
            },
            {
                "id": 384,
                "title": "Arigó",
                "description": "[s.m.] Burro; desastrado. (ex.: O arigó deixou cair todos os pratos no chão.)",
                "contribution": [
                    "Ja falei muito! hahahah"
                ]
            },
            {
                "id": 845,
                "title": "Arrancar os olhos e lamber o buraco",
                "description": "Cobrar muito caro por algum produto ou serviço. ",
                "contribution": []
            },
            {
                "id": 440,
                "title": "Arrancar pessegueiro",
                "description": "Expressao utilizada para dizer que algo é muito bom. Ex. O baile estava de arrancar pessegueiro.",
                "contribution": [
                    "bah, essa aí eu não conhecia."
                ]
            },
            {
                "id": 1081,
                "title": "Arrastando as alpargatas",
                "description": "Realizando trabalho com exaustão, cansaço.",
                "contribution": []
            },
            {
                "id": 716,
                "title": "Arrastinada",
                "description": "Muito ofendido, maltratado, humilhado... a resto de nada. ",
                "contribution": []
            },
            {
                "id": 368,
                "title": "Arrear",
                "description": "v. tr.\n1. Realizar algo muito difícil.\n2. Fazer algo muito bem feito (ver também 'se puxar').\n(ex.: Bah, ele se arreou fazendo aquele golaço no grenal.)",
                "contribution": []
            },
            {
                "id": 559,
                "title": "Arreganhada",
                "description": "Mulher muito sorridente, muito dada\n\nAplicação\n\"Mais arreganhada que gaita de bolicho\"\n",
                "contribution": []
            },
            {
                "id": 669,
                "title": "Arregar",
                "description": "Ficar com medo.",
                "contribution": []
            },
            {
                "id": 287,
                "title": "arreio",
                "description": "peças com que se arreia um cavalo para montar. ",
                "contribution": []
            },
            {
                "id": 1024,
                "title": "Arrepoiado",
                "description": "O vivente caiu de cara no asfalto e ficou todo arrepoiado",
                "contribution": []
            },
            {
                "id": 362,
                "title": "Arrodião",
                "description": "Derrota vexatória, dificuldade de obter êxito em alguma coisa.\nExemplo: O fulano levou um arrodião naquele jogo!",
                "contribution": []
            },
            {
                "id": 1045,
                "title": "Arrodiar",
                "description": "Girar, fazer rodar.\n",
                "contribution": []
            },
            {
                "id": 918,
                "title": "Arroio",
                "description": "O que no Brasil é chamado de \"riacho\", \"córrego\". Com essa palavra ocorre o mesmo que com \"sanga\".",
                "contribution": []
            },
            {
                "id": 403,
                "title": "Arroz de china pobre",
                "description": "Comida típica feita com arroz, linguiça, cebola picadinha, alho e pimentão. É uma comida de origem popular, bem conhecida e apreciada entre a população mais humilde do estado.",
                "contribution": []
            },
            {
                "id": 519,
                "title": "Asneira",
                "description": "bobagem, algo idiota",
                "contribution": []
            },
            {
                "id": 768,
                "title": "Ataio",
                "description": "Contração de atalho. \"Vai e pega um ataio pra chega la em casa , tchê\"",
                "contribution": [
                    "Caminho mais curto para chegar a algum lugar."
                ]
            },
            {
                "id": 305,
                "title": "Atarantado",
                "description": "Diz-se do sujeito que está com muitas tarefas e, por conta disso, fica atordoado, em dificuldades. Atarantado",
                "contribution": []
            },
            {
                "id": 867,
                "title": "Atinar",
                "description": "Perceber, dar-se por conta de algo.",
                "contribution": []
            },
            {
                "id": 484,
                "title": "Atochar",
                "description": "Mentir, fantasiar. Normalmente, mentiras de pequena importância, como exagerar um feito.\nExemplo: \"Aqui se reunem caçadores, pescadores e outros atochadores\".",
                "contribution": []
            },
            {
                "id": 771,
                "title": "Atrolhado",
                "description": "Diz-se do sujeito que está cheio de trabalho, cheio de coisas pra fazer.\n\nEx.: \"Não vou poder almoçar com vocês porque estou atrolhado de serviço.\"",
                "contribution": []
            },
            {
                "id": 511,
                "title": "Atucanada",
                "description": "Nervosa, preocupada, atrapalhada, ocupada, apoquentada.",
                "contribution": []
            },
            {
                "id": 736,
                "title": "Atucanado",
                "description": "Quando se tem muitas coisas para fazer, vários problemas para resolver, tarefas de trabalho e outras questões, todas em prazos semelhantes, quase ao mesmo tempo, e fica-se agitado fazendo várias coisas de uma só vez, tentando dar conta do recado.\nEx.:\n- Tens um minuto para conversarmos?\n- Agora não dá, tô muito atucanado!",
                "contribution": []
            },
            {
                "id": 390,
                "title": "Auto",
                "description": "[s.m.] Automóvel; carro. (ex.: Não sei onde deixei as chaves do meu auto.)",
                "contribution": []
            },
            {
                "id": 742,
                "title": "Avio",
                "description": "Isqueiro de pedra, pederneira.",
                "contribution": []
            },
            {
                "id": 673,
                "title": "Azar é do goleiro",
                "description": "Tipo \"doa a quem doer\". \"Não quero saber, não tô nem aí!\".",
                "contribution": []
            },
            {
                "id": 619,
                "title": "Azedume",
                "description": "Mal humorado, chateado, acabrunhado...ex: mas tá num azedume que só vendo...",
                "contribution": []
            },
            {
                "id": 722,
                "title": "Azucrinar",
                "description": "Incomodar alguém.\nEx: Para de azucrinar guri.",
                "contribution": []
            },
            {
                "id": 412,
                "title": "Babuja",
                "description": "Alguma coisa grande",
                "contribution": []
            },
            {
                "id": 413,
                "title": "Babujera",
                "description": "Uma coisa muito maior que algo babuja",
                "contribution": []
            },
            {
                "id": 623,
                "title": "Bacanudo",
                "description": "Muito bacana. Muito legal.",
                "contribution": []
            },
            {
                "id": 417,
                "title": "Bachero",
                "description": "O mesmo usa em cavalos, estrapiado, judiado. Ex: que loco bachero aquele",
                "contribution": [
                    "Folhas inferiores de um pé de fumo."
                ]
            },
            {
                "id": 449,
                "title": "Bacuri",
                "description": "menino, garoto, filho",
                "contribution": []
            },
            {
                "id": 430,
                "title": "Bagacera",
                "description": "Pessoa incoveniente. Chinelão. Turma de amigos. ",
                "contribution": []
            },
            {
                "id": 950,
                "title": "Bago",
                "description": "Pode ter dois significados:\n1- Testículos. Ex: Ai, me chutaste bem nos bagos, mulher!\n2- Chute muito forte na bola de futebol, que geralmente a manda pra bem longe do campo. Ex: Pra quê dar um bago desses na bola, guri??",
                "contribution": []
            },
            {
                "id": 315,
                "title": "Bagual",
                "description": "Pessoa grosseira, estúpida.",
                "contribution": []
            },
            {
                "id": 26,
                "title": "Baguari",
                "description": "Vagaroso, lerdo, mole, pesadão.",
                "contribution": []
            },
            {
                "id": 346,
                "title": "bah",
                "description": "Oriunda da expressão \"bah tchê\", sinônimo de \"mas que barbaridade\".\nA expressão \"bah\" é uma das mais polivalentes da cultura da República Rio-Grandense. Possui vários significados dependendo da situação, do cenário, o quanto se prolonga ao pronunciar e da entonação com que é pronunciada.\n\nEspanto: \"Bah, e é barato!\"\nDesapontamento: \"baahhh, mas é um animal...\"\nIndignação ou inconformidade: \"Baah, nem vou te falar é mais nada\"\nIndiferença ou desinteresse: \"uhum, bah...\"\nElogio: \"Baaahhhh\"\nTristeza: \"Bah mas com essa se foi o boi com a corda.\"\nFelicidade: \"Bah, mas é louco de especial !!\"\nConcordância: \"BAAHHHH, beeem certinho !!!\"\nSurpresa: \"Baaaahhh mas é uma 'cavala'(gostosa) !!\"\nRevolta: Bã!",
                "contribution": [
                    "Buenas, Daniel Knevitz;\n\nEspero que não fiques brabo, mas tomei a liberdade de fazer algumas modificações que julguei capazes de colaborar para a descrição deste verbete que é um dos mais (senão o mais) comum do nosso Rio Grande."
                ],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/60622253",
                    "https:\/\/api.soundcloud.com\/tracks\/67395065",
                    "https:\/\/api.soundcloud.com\/tracks\/71686920",
                    "https:\/\/api.soundcloud.com\/tracks\/85956568",
                    "https:\/\/api.soundcloud.com\/tracks\/88430884",
                    "https:\/\/api.soundcloud.com\/tracks\/111021286",
                    "https:\/\/api.soundcloud.com\/tracks\/122365654"
                ]
            },
            {
                "id": 537,
                "title": "Baia",
                "description": "Casa ou residência, local aonde pessoas vivem.\nEx. Eu vou para minha \"baia\". Eu vou para minha casa.",
                "contribution": []
            },
            {
                "id": 27,
                "title": "Baiacu",
                "description": "Peixe das costas oceânicas do RS. Quando irritado, enche-se de ar, ficando como uma bola, e nadando, então, de ventre pra cima.",
                "contribution": []
            },
            {
                "id": 990,
                "title": "Baio",
                "description": "Brabo, descontrolado, enfurecido.",
                "contribution": []
            },
            {
                "id": 672,
                "title": "Baita",
                "description": "Algo muito grande, gigantesco.",
                "contribution": []
            },
            {
                "id": 472,
                "title": "Balaca\/balaqueiro",
                "description": "malandro, cheio de si, pomposo.",
                "contribution": []
            },
            {
                "id": 764,
                "title": "Balaqueira",
                "description": "Pessoa gabola, sabe tudo, não confiável. Também significa o indivíduo que se exibe demais. ",
                "contribution": []
            },
            {
                "id": 875,
                "title": "Baldoso",
                "description": "Pessoa carente, precisando de carinho. \n\n*Contribuição do Alfabeto de Quaraí",
                "contribution": []
            },
            {
                "id": 1048,
                "title": "balota",
                "description": "mentira",
                "contribution": []
            },
            {
                "id": 12,
                "title": "Banda",
                "description": "O termo significa lugar, região, paragem. Quando alguém diz: “Sou de outras bandas” quer dizer que é de outro lugar, de outra regiões ou de outras paragens.",
                "contribution": []
            },
            {
                "id": 13,
                "title": "Banzo",
                "description": "É uma pessoa 'não muito certa'. \nEx.: Mas tu é banzo né!!",
                "contribution": []
            },
            {
                "id": 898,
                "title": "Barateza",
                "description": "Sacanagem, baixaria",
                "contribution": []
            },
            {
                "id": 386,
                "title": "Barbaridade!!",
                "description": "Expressão usada em frases de espanto, susto, alegria, indignação. Exemplo: Tchê mas que barbaridade!",
                "contribution": []
            },
            {
                "id": 14,
                "title": "barbicacho",
                "description": "tira de couro, de algodão ou similar que prende o chapéu ao queixo.",
                "contribution": [
                    "Anita Garibaldi, heroína catarinense, usava um chapéu com barbicacho de cor vermelha. Em homenagem a ela existe um CTG na cidade de Lages chamado \"Barbicacho Colorado\"."
                ]
            },
            {
                "id": 1043,
                "title": "Barde",
                "description": "Manha\nEx: -Espera nós chega em casa pia, quero tira tuas barde!",
                "contribution": []
            },
            {
                "id": 496,
                "title": "BARRANQUEAR",
                "description": "Praticar a bestialidade (i.e., sexo com animais), usando o barranco quando necessário para nivelar a diferença de altura (p.ex., com éguas e vacas). \"Barranquear é verbo xucro | Mais velho que a monarquia | Criado em fodologia | De um modo pampeiro e franco\"",
                "contribution": []
            },
            {
                "id": 1031,
                "title": "Bateclô",
                "description": "Local destinado a receber dejetos oriundos da veia bostérea, latrina. Derivado do vocábulo inglês Water-Closet",
                "contribution": []
            },
            {
                "id": 1003,
                "title": "Batendo água",
                "description": "Sinônimo de chuva forte, torrencial.\nExemplo de uso: \"Se eu fosse tu não saia agora, tá batendo água.\"",
                "contribution": []
            },
            {
                "id": 834,
                "title": "Bater as botas",
                "description": "Morrer, falecer...",
                "contribution": []
            },
            {
                "id": 951,
                "title": "Bater cola",
                "description": "Sair de casa sem um bom motivo. Ex: Essa guria não pára de sair pra bater cola no shopping!",
                "contribution": []
            },
            {
                "id": 28,
                "title": "Batocaço",
                "description": "Golpe que o galo dá com os batoques, quando rinhado.",
                "contribution": []
            },
            {
                "id": 601,
                "title": "baús",
                "description": "muito grande, muita coisa, sinônimo de muito, aplica-se numa frase como: \"tinha baús de coisas para fazer\"",
                "contribution": []
            },
            {
                "id": 746,
                "title": "Baus de tri",
                "description": "Muito legal mesmo; demais. ",
                "contribution": []
            },
            {
                "id": 750,
                "title": "Bei",
                "description": "Derivação de Bah.",
                "contribution": []
            },
            {
                "id": 380,
                "title": "bem capaz!",
                "description": "tem significado de negação à alguma  coisa ou pedido.\nEx: Posso furar a fila do mate? Bem capaz!",
                "contribution": [
                    "bem periga(que falamos piriga) mesmo."
                ],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/69524032"
                ]
            },
            {
                "id": 668,
                "title": "Bem nessas",
                "description": "Significa dizer \" sim, isso mesmo, eu concordo contigo\".",
                "contribution": []
            },
            {
                "id": 876,
                "title": "Berba",
                "description": "Pelas beiradas. \n\n*Contribuição do Alfabeto de Quaraí. ",
                "contribution": []
            },
            {
                "id": 683,
                "title": "Berga",
                "description": "Diminutivo de \"bergamota\", ou seja, o mesmo que \"tangerina\".\nEx. \"Aproveitei o sol para passar a tarde na Redenção, lagarteando e comendo uma berga\".",
                "contribution": []
            },
            {
                "id": 15,
                "title": "BERGAMOTA",
                "description": "A tangerina (Citrus reticulata), também laranja-mimosa, mandarina, fuxiqueira, ponkan, laranja-cravo, mimosa, vergamota, clementina, bergamota ou mexerica[1], é uma fruta cítrica de cor alaranjada e sabor adocicado. Parece ser uma antiga espécie selvagem [2], nativa da Ásia (Índia, China e países vizinhos de clima subtropical e tropical úmido).",
                "contribution": []
            },
            {
                "id": 979,
                "title": "Biaba",
                "description": "significado: tapa, soco.\norigem: termo gauchesco e crioulo argentino.\nEx: Vou te dar umas biabas se não obedecer!",
                "contribution": []
            },
            {
                "id": 890,
                "title": "Bicheira",
                "description": "Coisa muita velha: normalmente utilizada para especificar automóvel muito velho, caindo aos pedaços.",
                "contribution": []
            },
            {
                "id": 784,
                "title": "Bicicleteiro",
                "description": "Ciclista, pessoa andando de bicicleta. EX: Quase atropelei um bicicleteiro na rua hoje. ",
                "contribution": []
            },
            {
                "id": 645,
                "title": "Bidê",
                "description": "Mesinha de cabeceira.",
                "contribution": []
            },
            {
                "id": 877,
                "title": "Bidu",
                "description": "Cachorro quente vendido em trailers. \n\n*Contribuição do Alfabeto de Quaraí. ",
                "contribution": []
            },
            {
                "id": 16,
                "title": "Biriquete",
                "description": "Viela, caminho estreito, esconderijo.",
                "contribution": []
            },
            {
                "id": 713,
                "title": "Bisca",
                "description": "Pessoa nojenta , rabugenta , chata. Também pode significar quem faz biscate. ",
                "contribution": []
            },
            {
                "id": 29,
                "title": "Biscaio",
                "description": "Facão grande usado pelos homens que trabalham no mato.",
                "contribution": []
            },
            {
                "id": 1007,
                "title": "Bixento",
                "description": "Pessoa ralé, medíocre",
                "contribution": []
            },
            {
                "id": 738,
                "title": "Boca entaipada",
                "description": "Diz-se quando a situação não está boa. Ex.: Vamos embora que estourou um bochincho e é \"boca entaipada\".",
                "contribution": []
            },
            {
                "id": 545,
                "title": "Boca floreada",
                "description": "Tolo, atrapalhado, lerdo, distraído\nEx.: O boca floreada esqueceu a carne do churrasco",
                "contribution": []
            },
            {
                "id": 404,
                "title": "Bochincho",
                "description": "Confusão, troca de xingamentos, discussão acalorada, etc. Ex.: \"Qual foi o bochincho dessa vez? Aquela guria tá sempre puxando briga com todo mundo!\"",
                "contribution": []
            },
            {
                "id": 822,
                "title": "Boco",
                "description": "Círculo feito no solo com a pressão do calcanhar enquanto o corpo gira para marcar o local onde deve-se colocar a bola atirada no jogo de \"sela\"; A quantidade de bocos corresponde ao número de jogadores menos 1; Cada jogador escolhe 1 boco, exceto o lançador.",
                "contribution": []
            },
            {
                "id": 1134,
                "title": "Bodear",
                "description": "Sinônimo de \"lagartear\", dormir, descansar deitado, etc.\n\nAssim como o lagarto fica ao sol sobre as pedras (curtindo a boa vida) os bodes também aproveitam o sol e o vento enquanto pastam.\n\nEx.: Mas olha lá o fulano! Já tá bodeando! [lagarteando]",
                "contribution": []
            },
            {
                "id": 17,
                "title": "Bodega",
                "description": "Diz-se de mercado de pequeno porte, venda de secos e molhados pequeno.",
                "contribution": [
                    "Usamos o termo quando se refere ao mercado. Ex: Vou na bodega, precisa que te traga alguma coisa."
                ]
            },
            {
                "id": 975,
                "title": "Bodoque",
                "description": "O mesmo que funda ou estilingue.",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/82504435"
                ]
            },
            {
                "id": 463,
                "title": "Boi lerdo toma água toldada!",
                "description": "Aquele que se atrasar perderá a melhor parte.",
                "contribution": []
            },
            {
                "id": 483,
                "title": "bóia",
                "description": "comida",
                "contribution": []
            },
            {
                "id": 32,
                "title": "Boiada",
                "description": "Porção de bois mansos, especialmente do serviço de carrêtas.",
                "contribution": []
            },
            {
                "id": 720,
                "title": "Boleiar",
                "description": "\"Boleia a perna\", quer dizer, levanta e dá uma sacudida na perna. ",
                "contribution": []
            },
            {
                "id": 878,
                "title": "Boleio",
                "description": "Chute forte no futebol. \n\n*Contribuição do Alfabeto de Quaraí. ",
                "contribution": []
            },
            {
                "id": 396,
                "title": "Bolicho",
                "description": "[s.m.] Pequeno bar ou estabelecimento comercial onde o gaúcho se reúne para tomar uma canha, para ver noticias do povo e comprar um pedaço de fumo em corda. (ex.: Fui no Bolicho jogar uma bocha e tomar um trago de canha!)",
                "contribution": [
                    "Cesar Augusto; esse é um site colaborativo, é educado que a edição não seja total. Substituiste toda minha parte pela tua, como se os méritos fossem todos teus e minha edição de nada prestava. Tentei conciliar as duas agora. Att."
                ]
            },
            {
                "id": 542,
                "title": "bolija",
                "description": "bolita, bola de gude. Do cast. bolilla.",
                "contribution": []
            },
            {
                "id": 745,
                "title": "Bombacha",
                "description": "A bombacha é uma peça de roupa, calças típicas abotoadas no tornozelo, usada pelos gaúchos. O nome foi adotado do termo espanhol \"bombacho\", que significa \"calças largas\".\nPode ser feita de brim, linho, tergal, algodão ou tecidos mesclados; de padrão liso, listrado ou xadrez discreto. As cores podem ser claras ou escuras, fugindo-se de cores agressivas, chocantes e contrastantes.\nNo Rio Grande do Sul, a bombacha, juntamente com toda a indumentária característica do gaúcho, é considerada traje oficial desde 1989, quando foi aprovada a Lei Estadual da Pilcha [1] pela Assembléia Legislativa. De acordo com a Lei, a pilcha gaúcha -- o conjunto de vestes tradicionais tanto masculino quanto feminino -- pode substituir trajes sociais -- ex. terno e gravata para os homens e vestidos de tecidos mais nobres para as mulheres -- em qualquer ocasião formal que ocorra no Rio Grande do Sul, inclusive reuniões das Assembléias Legislativas estadual e municipais, desde que se observe as recomendações ditadas pelo Movimento Tradicionalista Gaúcho (MTG).",
                "contribution": []
            },
            {
                "id": 852,
                "title": "Bombando",
                "description": "Quando tu chegas em um lugar e a o ambiente tá 'loco de especial', ceva gelada, boa música e todos os amigos. ",
                "contribution": []
            },
            {
                "id": 714,
                "title": "Bombeia",
                "description": "Olhar algo ou para alguém. Ex: Bombeia só, a guria tá de namorado novo. \n",
                "contribution": []
            },
            {
                "id": 614,
                "title": "Bonachão",
                "description": "Diz-se do sujeito de boa índole, calmo e tranquilo.",
                "contribution": []
            },
            {
                "id": 18,
                "title": "Bonanchão",
                "description": "Aquele que é bondoso, calmo, cavalheiro, franco.",
                "contribution": []
            },
            {
                "id": 31,
                "title": "Bordonear",
                "description": "Executar uma música em viola ou violão usando as cordas mais grossas, que emitem sons mais graves.",
                "contribution": []
            },
            {
                "id": 616,
                "title": "Borracheira",
                "description": "Estado de embriaguez, bebedeira, tragueado, bêbado.",
                "contribution": []
            },
            {
                "id": 19,
                "title": "borracho",
                "description": "borracho é o índio véio mamado, bêbado. aquele que tá mais pra lá do que pra cá.",
                "contribution": []
            },
            {
                "id": 499,
                "title": "BRAGUETA",
                "description": "O mesmo que braguilha: parte frontal do vestuário masculino, que, ao ser aberta, permite ao usuário exteriorizar o pênis para urinar.",
                "contribution": []
            },
            {
                "id": 495,
                "title": "BRAGUILHA",
                "description": "peça do vestuário masculino que se usava nos séculos XV e XVI para cobrir os órgãos genitais. Por extensão o nome é aplicado a frente das calças, calções ou cuecas que se costuma fechar. Permite ao seu portador retirar o pênis para fora na ocasião de urinar.  \nNos séculos XV e XVI a braguilha surge por razões de pudor. ",
                "contribution": []
            },
            {
                "id": 743,
                "title": "Brazino",
                "description": "[adjetivo] Qualidade daquilo que assume a coloração da brasa acesa.\n\n  Exemplo:\n - Guri, volta aqui  ou vou te deixar brazino a pau. ",
                "contribution": [
                    "Brasino é uma palavra derivada de brasa. Então, só pode ser com \"s\" e não com \"z\".\nComplementando: é usado também para descrever a cor da pelagem do animal, por exemplo boi brasino (Música Picaço Velho, de José Mendes)."
                ]
            },
            {
                "id": 1136,
                "title": "Brete",
                "description": "Onde vacina o gado.",
                "contribution": []
            },
            {
                "id": 30,
                "title": "bruaca",
                "description": "1. megera, mulher que parece um dragão\n2. Compartimento de carga usado em lombo de cavalos e muares e que no tempo das tropeadas servia para o transporte de especiarias, ferramentas, tecidos etc, para pontos distantes do território brasileiro e ainda hoje usada em regiões de minifúndio, onde há dificuldade de uso de outro meio de transporte; espécie de bolsa de grandes dimensões, usada sempre aos pares penduradas nas cangalhas, equipamento de suporte apoiado diretamente sobre o lombo do animal.",
                "contribution": []
            },
            {
                "id": 382,
                "title": "Bruxo",
                "description": "Utilizado como forma de tratamento aos flanelinhas. ",
                "contribution": []
            },
            {
                "id": 378,
                "title": "Buchincho",
                "description": "s.m.\nGrafia alternativa de 'bochincho' [veja: 'bochincho'].\nConfusão; tumulto; briga generalizada.\n(ex.: Mas não é que a chinoca pegou o índio velho traindo ela e o bichincho estava formado.)",
                "contribution": []
            },
            {
                "id": 949,
                "title": "Bucho",
                "description": "Estômago. Ex: Hoje vou encher o bucho no churras do meu primo!",
                "contribution": []
            },
            {
                "id": 781,
                "title": "Buchuda",
                "description": "O mesmo que prenha, grávida.",
                "contribution": [
                    "Buchuda se fala no Norte, nao no RS, aqui é prenha, nao sei de q região tu tirou isso."
                ]
            },
            {
                "id": 610,
                "title": "Budum",
                "description": "Grande desordem, sujeira, bagunça...\nEm algumas localidades, também significa mau odor. ",
                "contribution": []
            },
            {
                "id": 955,
                "title": "Buenacha",
                "description": "Significa uma coisa boa.",
                "contribution": []
            },
            {
                "id": 446,
                "title": "Buenas",
                "description": "[interj.] Buenas é um cumprimento, pode ser usado em qualquer momento do dia para cumprimentar amigos e conhecidos. (ex.: Buenas, tchê! Como vai a família?)\nEternizado na fala do Capitão Rodrigo, personagem de Érico Verísimo, em O tempo e o vento: \"Buenas e me espalho...\"",
                "contribution": []
            },
            {
                "id": 304,
                "title": "Bugio",
                "description": "Pelego curtido e pintado, em geral forrado de pano. Animal da Serra.",
                "contribution": []
            },
            {
                "id": 1037,
                "title": "Buxa",
                "description": "Quem nunca disse \"É buxa!!\", \"Pura Buxa!!\"... Palavra usada para expressar algo \"complicado\".",
                "contribution": []
            },
            {
                "id": 933,
                "title": "Cabeça de porongo",
                "description": "Cabeção, teimoso, cabeça dura...",
                "contribution": []
            },
            {
                "id": 861,
                "title": "Caborteira",
                "description": "Cavalo ou outro animal, manhoso, arisco, infiel, velhaqueador, que não se deixa pegar.\nIndivíduo velhaco, esperto, manhoso, mau, mentiroso, trapaceiro, tratante, que vive de expedientes.",
                "contribution": []
            },
            {
                "id": 33,
                "title": "Cabresto",
                "description": "Peça de couro apresilhada ao buçal ou buçalete para segurar o cavalo ou o muar. É comum o uso da expressão “sentar no cabresto”.",
                "contribution": []
            },
            {
                "id": 35,
                "title": "Cacaria",
                "description": "Porção de objetos velhos e sem serventia. Cacarecos tem o mesmo significado.",
                "contribution": []
            },
            {
                "id": 352,
                "title": "Cacetinho",
                "description": "O famoso Pão Frances",
                "contribution": []
            },
            {
                "id": 36,
                "title": "Cachetada",
                "description": "Bofetada, paulada, soco.",
                "contribution": []
            },
            {
                "id": 879,
                "title": "Cachorro de baile",
                "description": "Gurizada no baile atrás do conjunto só olhando. \n\n*Contribuição do Alfabeto de Quaraí. ",
                "contribution": []
            },
            {
                "id": 1011,
                "title": "Cacunda",
                "description": "Costas, ombros. \n",
                "contribution": []
            },
            {
                "id": 34,
                "title": "Cafundó",
                "description": "Lugar ermo e solitário, grota. É comum o uso da expressão “lá nos cafundós do Judas”.",
                "contribution": []
            },
            {
                "id": 450,
                "title": "Cagaço",
                "description": "tomar um susto muito grande, vivenciar algo inesperado com medo",
                "contribution": []
            },
            {
                "id": 667,
                "title": "Cagando e andando",
                "description": "O cara que não tá se importando muito com determinada situação. Mesmo que seja difícil imaginar a cena.",
                "contribution": []
            },
            {
                "id": 604,
                "title": "Cagar a pau",
                "description": "Bater muito, dar uma surra.",
                "contribution": []
            },
            {
                "id": 319,
                "title": "Calavera",
                "description": "aquele que compra e não paga. enganador, golpista...",
                "contribution": [
                    "É falada conforme se escreve, \nEx; Vendi um cavalo para o F... Dei prazo de uma semana para que me pagasse. Já faz mais de ano e até hoje aquele calavera  não apareceu mais.\nÉ muito conhecida aqui em Triunfo."
                ]
            },
            {
                "id": 938,
                "title": "Camadona",
                "description": "Palavra de bastante espanto, tipo como \"Camadona! Tu viu aquilo?",
                "contribution": [
                    "é a  contração de \"porca madonna\""
                ]
            },
            {
                "id": 718,
                "title": "Camareu",
                "description": "Sinônimo - camarão\n\nUtilizado princialmente por vendedores ambulantes que circulam pela cidade de bicicleta vendendo o  crustáceo.",
                "contribution": []
            },
            {
                "id": 880,
                "title": "Cambona",
                "description": "Recipiente para aquecer água para o mate no fogo de chão. \n\n*Contribuição do Alfabeto de Quaraí. ",
                "contribution": []
            },
            {
                "id": 37,
                "title": "Cambota",
                "description": "Cair realizando um giro com o corpo para frente.....Cambalhota, rolamento para frente, rolinho....",
                "contribution": []
            },
            {
                "id": 1091,
                "title": "camoatim",
                "description": "Espécie vespa produtora de um gostoso mel, muito encontrado em colméias suspensas em ávores e arbutos nos campos do Rio grande do Sul.",
                "contribution": []
            },
            {
                "id": 419,
                "title": "Campear",
                "description": "Procurar algo",
                "contribution": []
            },
            {
                "id": 902,
                "title": "Camperiar",
                "description": "Sair campo a fora, ou sair pra lide campeira.",
                "contribution": [
                    "Podemos sair campo a fora...sem fazer lide campeira\nLide campeira é o trabalho ligado as atividades de campo,exemplo...levar a boiada de um campo para o outro,levar os cavalos para a invernadas,para as baias,domar equinos,dar banho nos animais(gado e cavalos)."
                ]
            },
            {
                "id": 1146,
                "title": "Cancheiro",
                "description": "Cavalo cancheiro é o já habituado e mestre em correr. Deriv. De cancha.",
                "contribution": []
            },
            {
                "id": 869,
                "title": "Candanga",
                "description": "Sujeito andarilho, sem morada certa, estradeiro. Alguém que vive pelas estradas pedindo alimento e pousada. Personagem assustadora das crianças. Meus pais diziam: -\"Cuidado que o candanga te pega.\"",
                "contribution": []
            },
            {
                "id": 338,
                "title": "capaz",
                "description": "\"interjeição\" de espanto - Ex: CAPAZ QUE TU CONSEGUIU FAZER ISTO!?\n2. \"interjeição\" de negação - Ex: O QUÊ? BEM CAPAZ!",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/60624129",
                    "https:\/\/api.soundcloud.com\/tracks\/67395333"
                ]
            },
            {
                "id": 942,
                "title": "Capincho",
                "description": "O mesmo que bajuladores, aqueles que estão sempre adulando alguma pessoa importante.",
                "contribution": []
            },
            {
                "id": 905,
                "title": "Caramuru",
                "description": "Brasileiro que não nasce no Rio Grande. Usado desde a época da Guerra dos Farrapos, quando designava os membros do Partido Restaurador (que pretendia a volta de D. Pedro I para o governo do Brasil) e logo passou a designar todos os soldados brasileiros, com os quais os gaúchos peleavam.",
                "contribution": []
            },
            {
                "id": 881,
                "title": "Carneiro",
                "description": "Aquele que cobiça a mulher dos outros. \n\n*Contribuição do Alfabeto de Quaraí. ",
                "contribution": []
            },
            {
                "id": 882,
                "title": "Carpeta",
                "description": "Pasta de documentos ou jogo de cartas. \n\n*Contribuição do Alfabeto de Quaraí. ",
                "contribution": []
            },
            {
                "id": 354,
                "title": "Carpim",
                "description": "Meia",
                "contribution": []
            },
            {
                "id": 564,
                "title": "Carreteiro",
                "description": "1. Pessoa, geralmente um homem, que transporta produtos, mantimentos e artigos variados em uma carreta de bois.Os carreteiros de hoje transportam as cargas nos carretas movidas a cavalos mecânicos, ou seja, caminhões. \n2. Os carreteiros antigos inventaram o  \"arroz de carreteiro\", mais conhecido no Rio Grande do Sul como \"carreteiro\", feito do charque – carne salgada e seca ao sol para não estragar. ",
                "contribution": [
                    "foi o meu almoço hoje"
                ]
            },
            {
                "id": 925,
                "title": "Carreteiro de charque",
                "description": "Comida típica, que consiste em arroz com charque (carne seca) picadinho.",
                "contribution": []
            },
            {
                "id": 779,
                "title": "Cascudo",
                "description": "Pancada em algo ou na cabeça de alguém com os nós dos dedos. Sinônimos: coque, cocorote. Exemplo: A menina deu um cascudo no irmão mais novo.",
                "contribution": []
            },
            {
                "id": 735,
                "title": "Castelhano(castelhana)",
                "description": "Pessoa de nacionalidade estrangeira Argentina ou Uruguaia",
                "contribution": []
            },
            {
                "id": 883,
                "title": "Catinga",
                "description": "Mau cheiro. \n\n*Contribuição do Alfabeto de Quaraí. ",
                "contribution": []
            },
            {
                "id": 306,
                "title": "Caudilho",
                "description": "Chefe militar. Manda-chuva.",
                "contribution": []
            },
            {
                "id": 288,
                "title": "causo",
                "description": "o mesmo que caso, história, qualquer narrativa contada à beira do fogo, nos galpões das estâncias. caso, conto, acontecimento",
                "contribution": []
            },
            {
                "id": 708,
                "title": "Cazul de linha",
                "description": "Nome dado ao retrós de linha.",
                "contribution": []
            },
            {
                "id": 919,
                "title": "Cerro",
                "description": "Morro ou montanha baixa. No RS se usa a palavra em espanhol, \"cerro\", resquício deixado pelos primeiros colonizadores da região - os castelhanos.",
                "contribution": []
            },
            {
                "id": 462,
                "title": "Ceva",
                "description": "Abreviativo para cerveja, usado principalmente em Porto Alegre. No interior do estado é mais observado o uso de \"cerva\".",
                "contribution": [
                    "Ceva ou cerva, o que importa é que venha gelada!"
                ]
            },
            {
                "id": 493,
                "title": "Cevar",
                "description": "Preparar, cativar.\nCevar o mate: prepará-lo para ser bebido.\nCevar um animal: acostumá-lo a vir comer num lugar, para posteriormente caçá-lo.\nTermo usado também com o mesmo significado nos países latinos (escrito \"cebar\").",
                "contribution": []
            },
            {
                "id": 38,
                "title": "Chafundar",
                "description": "Atolar-se, cair n’água.",
                "contribution": []
            },
            {
                "id": 420,
                "title": "Chairado",
                "description": "Abatido, cansado... Derivado de faca ruim de fio, que já vem sendo amolada na chaira.",
                "contribution": []
            },
            {
                "id": 311,
                "title": "Chalana",
                "description": "Embarcação ou Lancha grande e chata",
                "contribution": []
            },
            {
                "id": 752,
                "title": "Chaleirando",
                "description": "Incomodando, se metendo ns assuntos dos outros, atrapalhando...",
                "contribution": []
            },
            {
                "id": 39,
                "title": "Chamarisco",
                "description": "O mesmo que chamariz; coisa que chama, que atrai.",
                "contribution": []
            },
            {
                "id": 290,
                "title": "chamarra",
                "description": "A chamarra é um colete escarlate ou preto, também talar e sem mangas, aberto na frente, usado sobre o roquete. A chamarra era, originalmente, uma jaqueta de equitação ao ar livre e suas pregas traseiras facilitavam o montar e desmontar do cavalo.",
                "contribution": []
            },
            {
                "id": 929,
                "title": "Chamegão",
                "description": "Assinatura; Ex.: Agora é só tu passar o chamegão na escritura para o negócio ficar preto no branco.",
                "contribution": []
            },
            {
                "id": 1068,
                "title": "Chapéu tapiado",
                "description": "Que levou um tapa e ficou com a aba para cima ou pedurado nas costas, pelo baricacho, preso ao pescoço",
                "contribution": []
            },
            {
                "id": 40,
                "title": "Charla",
                "description": "Palestra, conversa.",
                "contribution": []
            },
            {
                "id": 475,
                "title": "Chasque",
                "description": "Jornal .",
                "contribution": [
                    "Chasque: Palavra gaúcha, significa recado, mensageiro. Ex: Mande um chasque ao general ( um recado). Fonte: Dicionário Informal (http:\/\/www.dicionarioinformal.com.br\/chasque)\n\nDeriva de \"chaskiq\" ou \"chaskij\", palavra quechua (língua falada pelos INCAS) , e significa \"Mensageiro\". Os chasquis percorriam as estradas do império INCA a pé, descansando em abrigos que eram mantidos pelos moradores próximos. Percorriam até 20 Km por dia andando ou correndo, de acordo com a urgência, para entregar mensagens oficiais de governo ou objetos. Assim, formavam o sistema de correios daquele povo. Para ser Chasque os jovens deviam ter ótimo preparo físico e excelente memória, pois os Incas não dominavamos a escrita.\nEx: O chasque chegou com a mensagem do imperador.\n\nFontes: wikipedia (em português e espanhol)\n(http:\/\/pt.wikipedia.org\/wiki\/Chasqui)\n(http:\/\/es.wikipedia.org\/wiki\/Chasqui)"
                ]
            },
            {
                "id": 915,
                "title": "Cheba",
                "description": "Mendigo",
                "contribution": []
            },
            {
                "id": 473,
                "title": "Cheio de balaca!",
                "description": "Pessoa muito exibida. \nChegou aqui “cheio de balaca”!\n",
                "contribution": []
            },
            {
                "id": 388,
                "title": "Chergão",
                "description": "Espécie de tapete retangular de lã que se coloca sobre o lombo do cavalo antes da sela. No popular também se usa a expressão para falar uma roupa muito usada e encardida.",
                "contribution": []
            },
            {
                "id": 987,
                "title": "Chibo",
                "description": "Ovino macho, castrado, de até um ano de idade.",
                "contribution": []
            },
            {
                "id": 447,
                "title": "Chima",
                "description": "Forma abreviada para \"chimarrão\".\nEx.: e aí, passa lá em casa pra tomar um chima",
                "contribution": []
            },
            {
                "id": 491,
                "title": "Chimarrão",
                "description": "Do espanhol cimarrón= selvagem, puro.\nMate chimarrão: mate amargo, preparado sem adição de açúcar, leite, rapadura ou outras ervas; apenas água quente.\nGado chimarrão: gado sem dono, criado solto, sinônimo de \"alçado\" ou \"orelhano\", comum no século XIX.",
                "contribution": []
            },
            {
                "id": 528,
                "title": "Chimas",
                "description": "[s.m.] Forma reduzida de 'chimarrão' (consulta: \"chimarrão\"). Possui outras variações, como \"Chima\", principalmente (ex.: Mas que sol bem bom pra tomar um chimas na frente de casa!)",
                "contribution": []
            },
            {
                "id": 41,
                "title": "Chimbear",
                "description": "Gauderiar, vadiar, vagabundear. O mesmo que chimbiar.",
                "contribution": []
            },
            {
                "id": 389,
                "title": "Chimia",
                "description": "Termo utilizado pelos descendentes de alemães para designar as geléias de frutas\n\nSinônimos: schmier, geléia\nObservação: käs-schmier: geléia de queijo (venerada pela comunidade germânica do sul do mundo) = pronuncia-se \"quechimie\" ou \"quechimia\"\n",
                "contribution": []
            },
            {
                "id": 508,
                "title": "chimpa",
                "description": "esporte de rua dos piazitos, jogado com pedras (similar à bocha)",
                "contribution": []
            },
            {
                "id": 310,
                "title": "Chinaredo",
                "description": "Grande número de chinas, mulheres",
                "contribution": []
            },
            {
                "id": 471,
                "title": "Chinelagem",
                "description": "Sacanagem.",
                "contribution": [
                    "Coletivo de gente chinela.\n\nEx: Lá na festa só tinha chinelagem."
                ]
            },
            {
                "id": 418,
                "title": "Chinelão",
                "description": "Pessoa mal arrumada; coisas mal feitas; relaxamento.\nAquela guria está muito chinelona para ir na festa. ",
                "contribution": [
                    "quando você não gosta das atitudes de certa pessoa e quer se referir a ele voce diz:\n- Aquele CHINELÃO alí..."
                ],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/60624296"
                ]
            },
            {
                "id": 1062,
                "title": "Chinelo",
                "description": "Diz-se do indivíduo que vive na ralé.",
                "contribution": []
            },
            {
                "id": 825,
                "title": "Chinfrim",
                "description": "Modesto, sem graça...  Ex: Essa roupa é muito chinfrim para aquela festa.",
                "contribution": []
            },
            {
                "id": 291,
                "title": "Chinoca",
                "description": "A mulher gaúcha, a prenda.",
                "contribution": []
            },
            {
                "id": 609,
                "title": "Chiripa",
                "description": "Veste intima feminina, feita normalmente de pano de algodão.",
                "contribution": []
            },
            {
                "id": 550,
                "title": "chisme",
                "description": "discussão, tumulto, briga...",
                "contribution": [
                    "Escuto muito esta palavra quando vou visitar meu filho, minha nora e minha neta em Uruguaiana. No meio de uma brincadeira se alguém faz muita reclamação é chamad de chismento."
                ]
            },
            {
                "id": 688,
                "title": "Chispa",
                "description": "Sai, \"te arranca\", vai embora. ",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/60684667"
                ]
            },
            {
                "id": 618,
                "title": "Chorna",
                "description": "confusão, rebuliço, desordem.\nExemplo: \"Mas que 'chorna'* é essa?\n*Chorna: no sentido de confusão.\n",
                "contribution": []
            },
            {
                "id": 689,
                "title": "Chulear",
                "description": "Torcer para que algo aconteça, dar uma chuleada: ficar na expectativa; fazer pontos de costura a grosso modo antes de costurar em definitivo.",
                "contribution": []
            },
            {
                "id": 42,
                "title": "Chulepento",
                "description": "Aquele que tem chulé.",
                "contribution": []
            },
            {
                "id": 43,
                "title": "Chumbeado",
                "description": "Embriagado, bêbado; o mesmo que traguado.",
                "contribution": []
            },
            {
                "id": 1006,
                "title": "Chupim",
                "description": "Aproveitador",
                "contribution": []
            },
            {
                "id": 996,
                "title": "Churero",
                "description": "Quem vendia miúdos de bovinos.\nEram vendidos por carroceiros pelas ruas de São Borja. Isto até o início da década de 70.\nVem do espanhol \"achura\".",
                "contribution": []
            },
            {
                "id": 476,
                "title": "Churras",
                "description": "Abreviatura de Churrasco.\n-Onde vai ser o Churras?",
                "contribution": []
            },
            {
                "id": 44,
                "title": "Churrascada",
                "description": "Reunião de pessoas para participarem de um churrasco.",
                "contribution": []
            },
            {
                "id": 432,
                "title": "CHURRIO",
                "description": "Diarreia, desarranjo, caganeira. \"O xiru não veio porque deu um CHURRIO nele\"",
                "contribution": []
            },
            {
                "id": 615,
                "title": "Churumela",
                "description": "Conversa fiada, mentira, ou papo furado.",
                "contribution": []
            },
            {
                "id": 328,
                "title": "Cincha",
                "description": "Peça dos arreios que serve para firmar o lombilho ou o serigote sobre o lombo do animal. ",
                "contribution": [
                    "No meu pago a gente fala CHINCHA"
                ]
            },
            {
                "id": 477,
                "title": "Cinchado",
                "description": "Apresilhado, apertado.\nDeriva da palavra cincha, parte do arreio que prende a sela ao cavalo.\nEntre os tradicionalistas, é comum o emprego dos termos \"abraço bem cinchado\" e \"um quebra-costelas\",como sinônimos de um abraço bem apertado.",
                "contribution": []
            },
            {
                "id": 1008,
                "title": "Coió de mola",
                "description": "Pessoa boba, inútil, \"abobada\"!",
                "contribution": [
                    "Conheci em Sarandi-RS onde também era usada  a expressão: BOCÓ DE MOLA que entendo que devem equivaler-se. Da mesma forma a expressão \"ABOBADO DE ENCHENTE\" era usada  rferindo-se a bocó de mola ou coió de mola. Antonio Carlos Páris - parisnovohamburgo@gmail.com"
                ]
            },
            {
                "id": 468,
                "title": "Cola",
                "description": "Cabelo preso. \n\n*Contribuição do Alfabeto de Quaraí",
                "contribution": []
            },
            {
                "id": 813,
                "title": "Cola fina",
                "description": "Quem não usa pilcha e veste-se no estilo \"moderninho\"",
                "contribution": [
                    "O mesmo que  \"mauricinho\", das cidades."
                ]
            },
            {
                "id": 349,
                "title": "Colono",
                "description": "Agricultor, vivente nascido no interior do estado.",
                "contribution": []
            },
            {
                "id": 962,
                "title": "Com a boca na botija",
                "description": "Quando o índio é pego na hora H, no pulo do gato. Momento em que a pessoa é surpreendida pronta para realizar determinada ação.",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/113121457"
                ]
            },
            {
                "id": 47,
                "title": "Conchavar",
                "description": "Contratar serviços. Também significa alugar-se ou entrar para o serviço de uma estância ou de uma casa qualquer.",
                "contribution": []
            },
            {
                "id": 913,
                "title": "Conjuminar",
                "description": "Fazer nexo, bater ideias.\nExemplo: \nBah! Não conjuminamos e peguei o ônibus errado.",
                "contribution": []
            },
            {
                "id": 1067,
                "title": "Copa",
                "description": "Parte central e alta do chapéu",
                "contribution": []
            },
            {
                "id": 502,
                "title": "Copar",
                "description": "Vencer; Ter sucesso; Humilhar; Vencer a copa.\n\nExemplos:\n• Cope afú!\n• O Grêmio copou o campeonato.\n• Está muito bom. Você copou!\n• Cope! Cope sempre sem cessar!\n• Copadaço.",
                "contribution": []
            },
            {
                "id": 45,
                "title": "Corcovear",
                "description": "Pinotear. Quando o animal dá corcovos, saltos, curvando o lombo para lançar o cavaleiro para fora de si.",
                "contribution": []
            },
            {
                "id": 690,
                "title": "Cordão da calçada",
                "description": "Em São Paulo, chama-se \"meio-fio\". Mas é a parte da calçada que é pintada de amarelo, branco, etc.",
                "contribution": []
            },
            {
                "id": 566,
                "title": "Cortar os naipes",
                "description": "Expressão que indica a necessidade de dar limites à alguém. \"Bá, tem que cortar os naipes desse guri\".",
                "contribution": []
            },
            {
                "id": 295,
                "title": "corticeira",
                "description": "seivo ou seibo. corticeira do banhado. ",
                "contribution": []
            },
            {
                "id": 901,
                "title": "Costado",
                "description": "O mesmo que \"do lado\". Exemplo: Me parei no costado do fogão a lenha a tarde inteira.",
                "contribution": []
            },
            {
                "id": 953,
                "title": "Costeando",
                "description": "\"Vamo se costeando pro lado dos parceiros de fundamento\".\n\nAproximar-se, fica perto. \n\n",
                "contribution": []
            },
            {
                "id": 421,
                "title": "Cramenha",
                "description": "Segundo a Fernanda Krige, é uma expressão de desaprovação, que vem do dialéto italiano. Também expressa espanto.",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/71687735"
                ]
            },
            {
                "id": 300,
                "title": "Crioulo",
                "description": "Natural de um determinado ponto do Estado. Originário do país, da região do lugar onde vive.",
                "contribution": []
            },
            {
                "id": 46,
                "title": "Crivado",
                "description": "Cheio de alguma coisa. “Morreu crivado de balas”- morreu atingido por muitas balas.",
                "contribution": []
            },
            {
                "id": 1075,
                "title": "Crivo",
                "description": "Cigarro.\nExemplo: \"Tchê, acabaram meus crivo, tu tens um pra me dar?\"\n\"Me vê um quilo de erva e um pacote de crivo\"\n",
                "contribution": []
            },
            {
                "id": 553,
                "title": "Cuca",
                "description": "Espécie de pão doce (pode ter recheio ou não), possuem uma cobertura açucarada.",
                "contribution": []
            },
            {
                "id": 937,
                "title": "Cudio",
                "description": "Cudio é uma expressão de grande espanto, por exemplo: \"Cudio, que frio!\"",
                "contribution": []
            },
            {
                "id": 1033,
                "title": "Cueca de Piola",
                "description": "Rapaz inexperiente",
                "contribution": []
            },
            {
                "id": 318,
                "title": "Cuiúdo",
                "description": "Muito bom. Fodão. Excepcional. Exemplos: \"Esse mate tá cuiúdo!\"",
                "contribution": []
            },
            {
                "id": 999,
                "title": "Culhão",
                "description": "Testículos.",
                "contribution": [
                    "Ter culhão: ter coragem, enfrentar. "
                ]
            },
            {
                "id": 317,
                "title": "Cupincha",
                "description": "Companheiro, amigo. ",
                "contribution": []
            },
            {
                "id": 350,
                "title": "cusco",
                "description": "cachorro",
                "contribution": [
                    "Frio de renguear cusco. Frio tão intenso que pode deixar um cachorro mancando."
                ]
            },
            {
                "id": 892,
                "title": "Dalhe!",
                "description": "Cumprimento, o mesmo que: e aí?\n\n*Contribuição do Alfabeto de Quaraí. \n",
                "contribution": []
            },
            {
                "id": 631,
                "title": "Dançata",
                "description": "Bailarico, baileco, dança-rola",
                "contribution": []
            },
            {
                "id": 629,
                "title": "Dar Chá de garfo",
                "description": "Significa, falar mal de alguém através de indiretas",
                "contribution": []
            },
            {
                "id": 695,
                "title": "Dar no pé",
                "description": "Correr em disparada.",
                "contribution": []
            },
            {
                "id": 679,
                "title": "Dar nos dedos",
                "description": "Dar uma resposta rápida e bem dada.Fazendo com que a pessoa que recebeu tenha vontade de esconder o rosto.",
                "contribution": []
            },
            {
                "id": 459,
                "title": "Dar uma banda",
                "description": "Expressão usada para designar passeio sem especificar onde ou com que finalidade. Sair para passear. Equivalente a \"dar um rolê\". ",
                "contribution": []
            },
            {
                "id": 775,
                "title": "De apa",
                "description": "Muito, aos montes, bastante.",
                "contribution": []
            },
            {
                "id": 665,
                "title": "De canto",
                "description": "Discretamente, sem chamar a atenção.",
                "contribution": []
            },
            {
                "id": 666,
                "title": "De cara",
                "description": "Chocado, surpreso e até mesmo magoado. Tudo junto. \"Ô meu, o fulano tá de  cara contigo!\". Também pode significar o sujeito que não está sob algum estado alterado de consciência.",
                "contribution": []
            },
            {
                "id": 1002,
                "title": "De H",
                "description": "Expressão usada para designar algo inútil, falso.\nExemplo de uso: \"Este cabo é de H\"",
                "contribution": []
            },
            {
                "id": 663,
                "title": "De lamber os beiço",
                "description": "O mesmo que dizer: E dê-se por satisfeito!\nOu essa comida está de lamber os beiço: muito saborosa!",
                "contribution": []
            },
            {
                "id": 986,
                "title": "De Patrão!",
                "description": "(Também \"De Capa!\".) Interjeição de satisfação referente a algo, uma pessoa ou situação. Exemplo: \"RadioSemFronteira.com - Essa é de Patrão!\"",
                "contribution": []
            },
            {
                "id": 969,
                "title": "De ponta",
                "description": "Em pé, de pé. \n\"-Hoje, tempranito já estava de ponta.\"",
                "contribution": []
            },
            {
                "id": 664,
                "title": "De rachar",
                "description": "Geralmente refere-se ao frio muito intenso. \"Bah, hoje tá fazendo um frio de rachar os beiços\". Mas pode se referir aos efeitos do Sol.",
                "contribution": []
            },
            {
                "id": 455,
                "title": "De revesgueio!",
                "description": "1. Próximo, não exatamente onde deveria acertar\/estar.\n    Exemplo: \"Essa gripe me pegou, mas de revesgueio\".\n2. Olhar de revesgueio é olhar atravessado, meio de lado, de canto de olho.\n    Exemplo: \"Ele a olhou de revesgueio\".",
                "contribution": []
            },
            {
                "id": 1018,
                "title": "Debandiar",
                "description": "Corruptela de \"debandar\". Sair, deixar um lugar.",
                "contribution": []
            },
            {
                "id": 49,
                "title": "Debocheira",
                "description": "Grande troça ou deboche; zombaria, deboche.",
                "contribution": []
            },
            {
                "id": 48,
                "title": "Degolado",
                "description": "Diz-se do animal de pescoço muito fino no local da junção com a cabeça.",
                "contribution": []
            },
            {
                "id": 523,
                "title": "Deitar o cabelo",
                "description": "Se mandar, sair correndo...",
                "contribution": []
            },
            {
                "id": 58,
                "title": "Dentama",
                "description": "Grande quantidade de dentes. Dentadura toda igual.",
                "contribution": []
            },
            {
                "id": 50,
                "title": "Desacorçoar",
                "description": "Desanimar, desistir.",
                "contribution": []
            },
            {
                "id": 893,
                "title": "Desatinado",
                "description": "Enlouquecido, desesperado. \n\n*Contribuição do Alfabeto de Quaraí. \n",
                "contribution": []
            },
            {
                "id": 51,
                "title": "Desbocado",
                "description": "Diz-se do cavalo muito sensível da boca, que com a mais leve pressão do freio, levanta bruscamente a cabeça, não governando bem. Aplica-se também às pessoas que tem o hábito de dizer palavras obscenas ou menos delicadas.",
                "contribution": []
            },
            {
                "id": 59,
                "title": "Descambada",
                "description": "Declive, descida de uma coxilha ou lomba para uma quebrada ou vale. O mesmo que descambado.",
                "contribution": []
            },
            {
                "id": 53,
                "title": "Desembarrigar",
                "description": "Ficar delgado, magro, fazer desaparecer o grande volume da barriga.",
                "contribution": []
            },
            {
                "id": 61,
                "title": "Desembuchar",
                "description": "Confessar segredos, contar tudo o que sabe.",
                "contribution": []
            },
            {
                "id": 1050,
                "title": "Desenchufado",
                "description": "Desligado; Desconectado;\nEx: Ando meio Desenchufado ultimamente; ",
                "contribution": []
            },
            {
                "id": 60,
                "title": "Desgarrar",
                "description": "Retirar as garras (pontas) do couro. Também significa apartar-se dos outros, perder-se dos companheiros.",
                "contribution": []
            },
            {
                "id": 1047,
                "title": "desmaiar o Batista",
                "description": "A expressão \"de desmaiar o Batista\" é utilizada quando queremos dizer que algo está exagerado, causando mal estar. Por exemplo: \"Mas tá calor de desmaiar o Batista!\".\n\nA origem da expressão vêm do dia em que o Batista, comentarista da TV COM (rede de comunicação do RS) desmaiou ao vivo em um jogo: http:\/\/www.youtube.com\/watch?v=Zd7WBUj8PAs",
                "contribution": []
            },
            {
                "id": 576,
                "title": "Desmereceu",
                "description": "Desmerecer é quando perde a cor, o mesmo que desbotar\n",
                "contribution": []
            },
            {
                "id": 366,
                "title": "Despacito",
                "description": "adv.\nSem pressa; lentamente; com parcimônia. (ex.: Não 'se apressemo'. despacito, chegamos lá.)",
                "contribution": []
            },
            {
                "id": 54,
                "title": "Destornilhado",
                "description": "Diz-se daquele que não tem o juízo muito certo.",
                "contribution": []
            },
            {
                "id": 798,
                "title": "Deus o livre",
                "description": "Expressão de alívio (Deus o livre, ainda bem que não choveu hoje). ",
                "contribution": []
            },
            {
                "id": 552,
                "title": "Devereda",
                "description": "Rápido, ligeiro.\nEx: Quando ele recebeu a notícia saiu devereda resolver o problema.",
                "contribution": []
            },
            {
                "id": 57,
                "title": "Diabrete",
                "description": "Criança muito arteira.",
                "contribution": []
            },
            {
                "id": 55,
                "title": "Diacho",
                "description": "Diabo. “É o dicaho”, ou seja, é o diabo.",
                "contribution": []
            },
            {
                "id": 56,
                "title": "Dinheirama",
                "description": "Muito dinheiro. O mesmo que dinheiral. “Dei uma dinheirama por essa tropa”, ou seja, essa tropa custou muito dinheiro.",
                "contribution": []
            },
            {
                "id": 52,
                "title": "Ditas",
                "description": "Hemorróidas.",
                "contribution": []
            },
            {
                "id": 791,
                "title": "Do tempo do Ariri de gancho",
                "description": "Muito antigo, fora de moda, ultrapassado...",
                "contribution": []
            },
            {
                "id": 307,
                "title": "Doma",
                "description": "Ato de domar. Ato de amansar um animal xucro.",
                "contribution": []
            },
            {
                "id": 62,
                "title": "Dormida",
                "description": "Sono. Pouso no fim da jornada.",
                "contribution": []
            },
            {
                "id": 966,
                "title": "Dos tempos do guaraná de rolha",
                "description": "Algo muito antigo, dos idos de antigamente.",
                "contribution": []
            },
            {
                "id": 839,
                "title": "É de comer ou passar no pão?",
                "description": "Quando a pessoa não entende nada de nada. Não entende de determinado assunto ou da informação que lhe foi passada. ",
                "contribution": []
            },
            {
                "id": 1145,
                "title": "É mais feio que galope de vaca!",
                "description": "A vaca, ao contrário do cavalo, não sabe galopar. Quando por qualquer motivo, precisa correr, não é garbosa, é desajeitada, meio descordenada.",
                "contribution": []
            },
            {
                "id": 1001,
                "title": "Eita!",
                "description": "Interjeição de espanto.",
                "contribution": []
            },
            {
                "id": 479,
                "title": "Em cima do laço",
                "description": "Com pressa, apressado, com pouco tempo\nEx: Estou em cima do laço pra chegar na reunião.",
                "contribution": []
            },
            {
                "id": 74,
                "title": "Embelecos",
                "description": "Coisas de pouco valor, bugigangas.",
                "contribution": []
            },
            {
                "id": 64,
                "title": "Emborcar",
                "description": "Cair de borco, virar a canoa ou o veículo, quando a parte superior fica para baixo.",
                "contribution": []
            },
            {
                "id": 830,
                "title": "Embretar",
                "description": "Apertar, pressionar, deixar sem escapatória.",
                "contribution": []
            },
            {
                "id": 622,
                "title": "Embromar",
                "description": "v. Levar muito tempo para fazer algo. Andar devagar, sem pressa.",
                "contribution": []
            },
            {
                "id": 65,
                "title": "Embrulhão",
                "description": "Diz-se de ou o indivíduo que causa confusão, embaraço, atrapalhação, complicação.",
                "contribution": []
            },
            {
                "id": 63,
                "title": "Empacado",
                "description": "Calado, sério, taciturno.",
                "contribution": []
            },
            {
                "id": 75,
                "title": "Empilchado",
                "description": "Diz-se do que tem pilchas. Rico, que tem bons haveres.",
                "contribution": []
            },
            {
                "id": 66,
                "title": "Empipocar",
                "description": "Criar pústulas, bolhas ou borbulhas. Também significa estalar, arrebentar. O mesmo que espipocar, pipocar, papocar, espocar.",
                "contribution": []
            },
            {
                "id": 469,
                "title": "encalistrado",
                "description": "constrangido, desconfiado.\n\n\"Mais encalistrado que galinha chocando ovo de avestruz\"",
                "contribution": []
            },
            {
                "id": 67,
                "title": "Encarangar",
                "description": "Ficar enregelado a ponto de ficarem hirtas as mãos e os dedos.",
                "contribution": []
            },
            {
                "id": 68,
                "title": "Encasquetar",
                "description": "Obstinar-se em realizar alguma coisa. Meter uma ideia fixa na cabeça.",
                "contribution": []
            },
            {
                "id": 687,
                "title": "Encher de osso",
                "description": "Xingar alguém ou ser xingado. \"Tchê! O vivente me encheu de osso!\"",
                "contribution": []
            },
            {
                "id": 662,
                "title": "Encher o buxo",
                "description": "Comer demasiadamente. Um pouco além do recomendado.",
                "contribution": []
            },
            {
                "id": 1009,
                "title": "Encherido(a)",
                "description": "Pessoa com ar de superioridade!",
                "contribution": []
            },
            {
                "id": 379,
                "title": "Enchufar",
                "description": "Plugar. Do Espanhol 'enchufe'.",
                "contribution": []
            },
            {
                "id": 984,
                "title": "Encordoado",
                "description": "Consecutivos, em sequência.",
                "contribution": []
            },
            {
                "id": 69,
                "title": "Encostelar",
                "description": "Emparelhar, ficar rente com outrem, encostar-se a outrem, andar junto.",
                "contribution": []
            },
            {
                "id": 70,
                "title": "Endomingar-se",
                "description": "Vestir-se bem, com roupa de passeio.",
                "contribution": []
            },
            {
                "id": 894,
                "title": "Enfastiado",
                "description": "Sem fome, embuchado, de barriga cheia. \n\n*Contribuição do Alfabeto de Quaraí",
                "contribution": []
            },
            {
                "id": 76,
                "title": "Enforquilhar-se",
                "description": "Prender na forquilha. Em sentido, figurado, assentar-se mal, com deselegância, quando a cavalo.",
                "contribution": []
            },
            {
                "id": 527,
                "title": "ENGASGA GATO",
                "description": "Carne moída ou picada em tamanho grande ou ensopado com pedaços de charque. Geralmente usa-se os restos do churrasco.\nEx: Hoje a noite vai ter um engasga gato lá em casa.",
                "contribution": []
            },
            {
                "id": 895,
                "title": "Engatado",
                "description": "Apaixonado, louco pela guria. \n\n*Contribuição do Alfabeto de Quaraí",
                "contribution": [
                    "Usado no sentido de compromissado; pessoa que está namorando ou vivendo junto; usa-se a palavra \"engate\" para referir a namorada ou amázia."
                ]
            },
            {
                "id": 770,
                "title": "Engate",
                "description": "1 - Hora extra. 2 - Ato de estar engatado.\n\nEx. 1: \"Vou chegar mais tarde porque estou engatado aqui no serviço\"\n\nEx. 2: \"Trabalho entrando a essa hora? Certo que é engate\" ",
                "contribution": []
            },
            {
                "id": 71,
                "title": "Engrólio",
                "description": "Trapaça, embrulho, embrulhada.",
                "contribution": []
            },
            {
                "id": 540,
                "title": "Entecada",
                "description": "Doente, com problema de saude",
                "contribution": []
            },
            {
                "id": 563,
                "title": "Enticar",
                "description": "en.ti.car, transitivo indireto e pronominal\n(Regionalismo) provocar questão, entrar em discussão com; altercar, brigar\nTem a mania de enticar com todo mundo.\nEnticam-se diariamente sobre questões de trabalho.\n(Regionalismo) tomar implicância com (alguém ou algo); aborrecer\nResolveu enticar com o vizinho por causa de um muro.\nEnticou com o vestido assim que o viu.\n(Regionalismo) obstinar-se em; teimar, rabujar\nQuando ele (se) entica e resolve sair, não tem jeito.",
                "contribution": []
            },
            {
                "id": 308,
                "title": "entrevero",
                "description": "1. Confusão, mistura, briga, desentendimento. 2. Espécie de sanduíche recheado com diversos tipos de carnes picadas.",
                "contribution": []
            },
            {
                "id": 372,
                "title": "Entrouchado",
                "description": "Ato de entrouchar-se. Traduzindo, é o cara que sai bem agasalhado de casa, pronto pra enfrentar o frio de renguiar cusco que costuma fazer no Rio Grande.",
                "contribution": []
            },
            {
                "id": 73,
                "title": "Epucha!",
                "description": "Expressão de admiração.",
                "contribution": []
            },
            {
                "id": 77,
                "title": "Ermão",
                "description": "O mesmo que irmão. É a maneira mais comum que se exprime a gente rústica da campanha.",
                "contribution": []
            },
            {
                "id": 661,
                "title": "Escangalhado",
                "description": "Em estado lamentável. Esbodegado.",
                "contribution": []
            },
            {
                "id": 831,
                "title": "Escangalhar",
                "description": "Estragar, destruir.",
                "contribution": []
            },
            {
                "id": 1019,
                "title": "Escramuçar",
                "description": "Salto dado pelo cavalo, normalmente quando está sendo montado e sob pressão. Ex.: \"Meu cavalo escramuça, e até parece que pulsa sangue crioulo em minhas veias!\"",
                "contribution": []
            },
            {
                "id": 467,
                "title": "Esgualepada",
                "description": "Destroçada, destruída, demolida, bagunçada",
                "contribution": []
            },
            {
                "id": 326,
                "title": "Esgualepado",
                "description": "Pessoa ou animal mal tratado ou machucado. Cansado ao extremo. (Físico ou emocionalmente)\n\nJoão voltou todo esgualepado da fazenda.\nO cusco velho já tá esgualepado.\n\n",
                "contribution": [
                    "eu costumo falar Estrupiado",
                    "Cansado ou machucado."
                ]
            },
            {
                "id": 1036,
                "title": "esgualepado (a)",
                "description": "Alguém cansado...",
                "contribution": []
            },
            {
                "id": 577,
                "title": "Eslaque",
                "description": "Usado pelas mulheres, é a mesma coisa que calça comprida. Derivado de slack",
                "contribution": []
            },
            {
                "id": 1077,
                "title": "Esmerar",
                "description": "Caprichar, fazer bem feito, ",
                "contribution": []
            },
            {
                "id": 72,
                "title": "Esparramo",
                "description": "Separação, disseminação de objetos, de animais ou de pessoas. O mesmo que esparrame.",
                "contribution": []
            },
            {
                "id": 991,
                "title": "Esquaxerengado",
                "description": "Adjetivo que se refere a quem está quebrado, estropiado, manco ou rengo das pernas.",
                "contribution": [
                    "quenco, genzo"
                ]
            },
            {
                "id": 1073,
                "title": "Estar com um pé que é um leque",
                "description": "Ser uma pessoa que sai muito, que não para em casa",
                "contribution": [
                    "Estar louco para viajar, sair, saracotear..."
                ]
            },
            {
                "id": 1079,
                "title": "esticada no matambre",
                "description": "Quando um vivente está muito cansado, e vai dormir um pouco!",
                "contribution": []
            },
            {
                "id": 371,
                "title": "Estilingue",
                "description": "Querido entre a piazada, o estilingue é um instrumento feito geralmente com um pedaço de galho de goiabeira bifurcado, elástico e uma tira de couro. O objetivo é lançar pedras em um alvo, seja ele qual for.\n\nTambém conhecido como bodoque. ",
                "contribution": []
            },
            {
                "id": 309,
                "title": "Estropiado",
                "description": "Diz-se o animal sentido dos cascos, com dificuldade de andar, em conseqüência de marchas por estradas pedregosas.",
                "contribution": []
            },
            {
                "id": 785,
                "title": "Esturricar",
                "description": "Secar demais, ficar muito tempo no sol. Ex.: aquela roupa que ta secando lá fora no sol vai esturricar se você não for logo lá recolher.",
                "contribution": []
            },
            {
                "id": 78,
                "title": "Facada",
                "description": "Pedido de dinheiro feito por indivíduo vadio, que é incapaz de trabalhar, que não pretende restituí-lo.",
                "contribution": []
            },
            {
                "id": 312,
                "title": "Faceiro",
                "description": "alegre, contente",
                "contribution": []
            },
            {
                "id": 464,
                "title": "Faceiro que nem gordo de camiseta.",
                "description": "Uma pessoa que está muito feliz com algo, afinal é difícil um gordo entrar em uma camiseta. ",
                "contribution": []
            },
            {
                "id": 516,
                "title": "Faixa",
                "description": "Estrada, Rodovia",
                "contribution": []
            },
            {
                "id": 585,
                "title": "Falquejado",
                "description": "Significado de Falquejar. v.t. Desbastar uma madeira (tronco). Ex: Eu aprendi na escola do mundo não fui falquejado em bancos colegiais.",
                "contribution": []
            },
            {
                "id": 821,
                "title": "Faniquito",
                "description": "Surto psicótico; distúrbio mental; \" A tia Ponciana teve um faniquito quando soube que a Juraci fugiu com o Bonifácio\"",
                "contribution": []
            },
            {
                "id": 79,
                "title": "Fanisco",
                "description": "Pessoa de estatura pequena e magra.",
                "contribution": []
            },
            {
                "id": 82,
                "title": "Farrear",
                "description": "Sair à pândega, à folia, à troça, para divertir-se, passear, beber.",
                "contribution": []
            },
            {
                "id": 83,
                "title": "Fatiota",
                "description": "Terno; Conjunto de roupas do homem: calça, colete e paletó.",
                "contribution": []
            },
            {
                "id": 660,
                "title": "Faz a frente",
                "description": "O mesmo que \"Faz a mão\". Quer dizer: Pô fulano, dá um jeito aí.  Também pode ser: Vai, toma a iniciativa.",
                "contribution": []
            },
            {
                "id": 535,
                "title": "Fazer os lados",
                "description": "Quando o amigo está afim de alguém que tu conhece e quer uma ajuda, ele pede para que tu \"faça os lados\".",
                "contribution": []
            },
            {
                "id": 786,
                "title": "Fechou o pastel",
                "description": "Combinar algo, concordar com algo. Ex.: Vamos tomar um mate lá em casa? -Vamos sim. -Entao fechou o pastel.\n",
                "contribution": []
            },
            {
                "id": 659,
                "title": "Fechou o pau",
                "description": "Quer dizer que aconteceu uma briga, uma confusão, um tumulto. Pode ser também \"fechou a rosca\", ou ainda \"fechou o tempo\".",
                "contribution": []
            },
            {
                "id": 795,
                "title": "fedelho",
                "description": "Moleque, pentelho. Pessoa que parece uma criança pentelha.\nExemplo: Foi aquele fedelho que vi hoje no parque atrapalhando as outras crianças.\n",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/88481222"
                ]
            },
            {
                "id": 80,
                "title": "Fervo",
                "description": "Luta, tumulto, grande conflito.",
                "contribution": []
            },
            {
                "id": 81,
                "title": "Fiambre",
                "description": "Carne fria assada ou cozida na panela, que se leva para comer em viagem.",
                "contribution": []
            },
            {
                "id": 1135,
                "title": "Fiasqueira",
                "description": "Pessoa que briga em publico, que vergonha em algum lugar.\n\n",
                "contribution": []
            },
            {
                "id": 940,
                "title": "Fiasquento",
                "description": "Aquele que faz fiasco. Desastrado. Geralmente quando a pessoa faz algo que chame atenção dos outros, como gritar ou desastrar-se em público. ",
                "contribution": []
            },
            {
                "id": 719,
                "title": "Ficar na moita",
                "description": "Não se manifestar, ficar de fora para ver no que vai dar...",
                "contribution": []
            },
            {
                "id": 920,
                "title": "Finar de rir",
                "description": "Rir até perder o fôlego. Ex: Fulano se finou de tanto rir.",
                "contribution": []
            },
            {
                "id": 474,
                "title": "Findi",
                "description": "Forma apocopada para fim-de-semana. \"Nesse findi eu vou pra Capão da Canoa\".",
                "contribution": []
            },
            {
                "id": 906,
                "title": "Finesse",
                "description": "Sutileza, astúcia. ",
                "contribution": []
            },
            {
                "id": 1121,
                "title": "Fiquei com cara de tacho!",
                "description": "...",
                "contribution": []
            },
            {
                "id": 1013,
                "title": "Firme, forte e são de lombo",
                "description": "Expressão usada como resposta quando perguntam: Tudo bem contigo?\nE significa: Tudo bem!",
                "contribution": []
            },
            {
                "id": 505,
                "title": "Firula",
                "description": "Frescura, mimimi, enfeite demais.",
                "contribution": []
            },
            {
                "id": 84,
                "title": "Flaco",
                "description": "Fraco, magro, desnutrido.",
                "contribution": []
            },
            {
                "id": 488,
                "title": "Flete",
                "description": "Montaria, cavalo. Termo empregado também nos países platinos.",
                "contribution": []
            },
            {
                "id": 85,
                "title": "Floreado",
                "description": "Embriagado, tonto, perturbado; a meia embriaguez.",
                "contribution": []
            },
            {
                "id": 91,
                "title": "Foguete",
                "description": "Diz-se da criança arteira, traquinas, etc.",
                "contribution": []
            },
            {
                "id": 86,
                "title": "Forrobodó",
                "description": "Desordem, bochinche, baile popular.",
                "contribution": []
            },
            {
                "id": 87,
                "title": "Frege",
                "description": "Conflito, bagunça, briga. Também significa hotel ou pensão muito ruim.",
                "contribution": []
            },
            {
                "id": 709,
                "title": "Fresquear",
                "description": "Ato de abster-se de modo acovardado; desistir por razões sentimentais; fazer birra ou manha ao não continuar ou não prosseguir com a realização de algo ou de alguma coisa em específico.\n\nExemplos: \n1. \"Não te fresqueia, guria!\" \n2. \"Só porque começou a cair uma chuvinha, o guri já se fresqueou e não quis sair de casa.\"\n",
                "contribution": []
            },
            {
                "id": 1029,
                "title": "Friaca",
                "description": "Sinônimo de frio. \n\"Bah, mas que friaca!\" ",
                "contribution": []
            },
            {
                "id": 395,
                "title": "Frio de renguear cusco!",
                "description": "Expressão utilizada quando esta muito frio e forma-se a geada, então os cachorros fazem uma especie de revezamento com as patas para andar. ",
                "contribution": []
            },
            {
                "id": 637,
                "title": "Fuçar",
                "description": "Procurar. \n\n''vou fuçar(procurar) na internet até encontrar''",
                "contribution": []
            },
            {
                "id": 819,
                "title": "Fuleiro (a)",
                "description": "De péssima qualidade: \"esse baile tá muito fuleiro\".",
                "contribution": []
            },
            {
                "id": 92,
                "title": "Fulistrica",
                "description": "Pessoa insignificante, pessoa sem mérito.",
                "contribution": []
            },
            {
                "id": 556,
                "title": "Funda",
                "description": "estilingue, bodoque, brinquedo de criança, principalmente do interior do estado, ",
                "contribution": []
            },
            {
                "id": 89,
                "title": "Furungar",
                "description": "Insistir enfadonhamente a respeito de um assunto. Intrigar com mexericos insistentes.",
                "contribution": []
            },
            {
                "id": 88,
                "title": "Futriquinha",
                "description": "Coisa velha, sem valor.",
                "contribution": []
            },
            {
                "id": 90,
                "title": "Fuxicar",
                "description": "Coser com grandes pontos, sem muito cuidado, pano ou roupa. Também significa bulir, remexer em qualquer coisa. Intrigar, enredar, furungar.",
                "contribution": []
            },
            {
                "id": 820,
                "title": "Fuzarca",
                "description": "Confusão; aglomeração de pessoas envolvidas em brincadeiras, brigas ou sacanagens; \"botaram fogo na patente do Amâncio e dizem que o Pedro tava metido na fuzarca\";",
                "contribution": []
            },
            {
                "id": 924,
                "title": "Gadeia",
                "description": "Cabelo. ex.: penteei as gadeia! Tá na hora de cortar essas gadeia!",
                "contribution": []
            },
            {
                "id": 95,
                "title": "Gaitada",
                "description": "Grande risada, gargalhada.",
                "contribution": [
                    "Risada, gargalhada em volume acima do normal do ambiente, principalmente para quem quer aparecer. "
                ]
            },
            {
                "id": 578,
                "title": "Galgo",
                "description": "O mesmo que louco de fome, comilão, usado na década de 1960 a 1970",
                "contribution": []
            },
            {
                "id": 509,
                "title": "Galo Cinza",
                "description": "Similar a expressão Galo Veio. Amigo de Longa Data. Parceiro em Indiadas",
                "contribution": []
            },
            {
                "id": 510,
                "title": "Galo Véio",
                "description": "Grande Amigo; Parceiro de Indiadas",
                "contribution": []
            },
            {
                "id": 94,
                "title": "Garantonhas",
                "description": "Diz-se do aspecto do tempo, quando se apresenta feio ou ameaçador de chuva.",
                "contribution": []
            },
            {
                "id": 526,
                "title": "Garganta",
                "description": "[adj.] Quem gosta de se exaltar através de histórias inventadas ou aumentadas. Mentiroso. Falastrão. (ex.: Não acredito em ti, tu és muito garganta.) 2. [adj.] Quem vive ameaçando ou prometendo sem cumprir. (ex.: Ele vive prometendo a prenda em casamento mas nunca casa. É um garganta mesmo.)",
                "contribution": []
            },
            {
                "id": 828,
                "title": "Garralho",
                "description": "Bezerro(a) de qualidade inferior, tanto de raça como de constituição física.",
                "contribution": []
            },
            {
                "id": 481,
                "title": "Gastando a nega",
                "description": "1. Fazendo algo muito bem\n",
                "contribution": []
            },
            {
                "id": 96,
                "title": "Gastura",
                "description": "Azia, mal do estômago, enfarte.",
                "contribution": []
            },
            {
                "id": 851,
                "title": "Gato muito miador, não é bom caçador",
                "description": "Quem fala muito, mas não cumpre tudo o que anuncia...",
                "contribution": []
            },
            {
                "id": 605,
                "title": "Gaudério",
                "description": "1. Sinônimo de gaúcho.\n2. Sujeito alegre. \n3. Regionalismo gauchesco e da região serrana catarinense para o tipo humano, morador do campo, de hábitos rudes, errante, que acompanha qualquer pessoa até que a deixe para seguir outra.",
                "contribution": [
                    "~Guadério, originalmente é aquele gaúcho que não faz nada, ou que não é muito chegado ao trabalho. Nos bailes é aquele que fica pelos cantos só bombeando as prendas e se emborrachando. Qdo. saímos de férias , se diz, vou gauderiar."
                ]
            },
            {
                "id": 498,
                "title": "Gavola",
                "description": "Denominação ao gaúcho que exalta exacerbadamente seus feitos, qualidades; gabar-se; vangloriar-se. [Ex.: Sirvam nossas façanhas de modelo a toda Terra.] #quasenunca",
                "contribution": []
            },
            {
                "id": 865,
                "title": "Gazear",
                "description": "Faltar propositalmente à aula, ou mentir que vai ao colégio e ir pra outro rumo sem os pais saberem. Gíria antiga muito usada nos colégios gaúchos e pouco usada no Brasil hoje em dia.",
                "contribution": []
            },
            {
                "id": 93,
                "title": "Gentarada",
                "description": "Gentama, gentaria, multidão.",
                "contribution": []
            },
            {
                "id": 674,
                "title": "Gente fina",
                "description": "Diz-se de indivíduo com qualidades e virtudes. Amigo, parceiro, \"dus  meu\".",
                "contribution": []
            },
            {
                "id": 97,
                "title": "Ginete",
                "description": "Pessoa que monta bem, com firmeza e com garbo. Bom cavaleiro domador. Também significa o vulto de um homem a cavalo.",
                "contribution": []
            },
            {
                "id": 658,
                "title": "Godô",
                "description": "Artimanha, despiste, desculpa esfarrapada. \"O fulano me deu um godô\".",
                "contribution": []
            },
            {
                "id": 410,
                "title": "Goleira",
                "description": "[s.f.] Trave de futebol.",
                "contribution": []
            },
            {
                "id": 98,
                "title": "Gordacho",
                "description": "Gorducho, muito gordo, gordíssimo.",
                "contribution": []
            },
            {
                "id": 100,
                "title": "Grandote",
                "description": "Diz-se do menino já grande, ou do animal muito novo, já de tamanho regular.",
                "contribution": []
            },
            {
                "id": 767,
                "title": "Grauzento (a)",
                "description": "Esta palavra em nosso vocabulário se refere a uma pessoa que quer ser poderosa, maioral. Resumindo, se acha o bom (a).",
                "contribution": []
            },
            {
                "id": 888,
                "title": "Gravatá",
                "description": "Cactácea da familia Bromeliae, que se espalham pelos campos, tem espinhos finos que machucam quem anda sem calçados. ",
                "contribution": []
            },
            {
                "id": 377,
                "title": "Graxaim",
                "description": "O graxaim ou sorro (Pseudalopex gymnocercus) é um mamífero carnívoro da família dos canídeos, encontrado nos campos úmidos do Sul do Brasil, chega a medir até 1 metro de comprimento, com pelagem cinza amarelada, o alto da cabeça marrom ferrugíneo, orelhas grandes e focinho afilado. Também é conhecido pelos nomes de graxaim-do-campo, guaraxaim e sorro.",
                "contribution": []
            },
            {
                "id": 99,
                "title": "Graxeira",
                "description": "Panela grande ou caldeirão onde se fervem os ossos e se derrete o sebo da rês, para extrair a graxa. Também significa o lugar onde é instalado esse caldeirão nas charqueadas ou nas estâncias.",
                "contribution": []
            },
            {
                "id": 356,
                "title": "Gringada",
                "description": "Grupo de pessoas de origem italiana ou alemã, geralmente originarias da região da Serra Gaúcha. Similar ao termo \"alemoada\" para o grupo de pessoas de descendência alemã.",
                "contribution": []
            },
            {
                "id": 101,
                "title": "Grude",
                "description": "Namoro, derriço.",
                "contribution": []
            },
            {
                "id": 560,
                "title": "Guaiaca",
                "description": "carteira de dinheiro e documentos do gaucho",
                "contribution": []
            },
            {
                "id": 102,
                "title": "guaipeca",
                "description": "Sinônimo: cusco, cachorro",
                "contribution": []
            },
            {
                "id": 470,
                "title": "guampa",
                "description": "chifre, corno",
                "contribution": []
            },
            {
                "id": 313,
                "title": "Guapo",
                "description": "Forte, vigoroso, valente, bravo.",
                "contribution": []
            },
            {
                "id": 314,
                "title": "Guasca",
                "description": "1. Homem rústico, forte, guapo, valente.\n\n2. Tira, corda de couro cru, isto é, não curtido.\n\n3. Pênis.",
                "contribution": []
            },
            {
                "id": 103,
                "title": "Guaxa",
                "description": "Rebenque curto e grosso usado para doma.",
                "contribution": []
            },
            {
                "id": 106,
                "title": "Guenzo",
                "description": "Fora de prumo, que foi tirado de sua posição normal, inclinado, torto, pendido para um lado, inseguro, bamboleante.",
                "contribution": []
            },
            {
                "id": 105,
                "title": "Guincha",
                "description": "Poldra, potranca, égua nova, gueixa. Também significa mulher despudorada.",
                "contribution": []
            },
            {
                "id": 107,
                "title": "Guisado",
                "description": "Carne moída refogada",
                "contribution": []
            },
            {
                "id": 657,
                "title": "Guri de Apartamento",
                "description": "Utiliza-se quando queremos nos referir a alguém que não tem muita experiência, criado sempre dentro de casa (ou pela avó).  ",
                "contribution": []
            },
            {
                "id": 424,
                "title": "guria",
                "description": "sinonimo de menina ,feminino de guri ",
                "contribution": []
            },
            {
                "id": 1071,
                "title": "Guria do céu",
                "description": "quando se está abismado com alguma coisa, por exemplo: Guria do céu, o que aconteceu contigo?",
                "contribution": []
            },
            {
                "id": 104,
                "title": "Gurizada",
                "description": "Rapazio, meninada, muchachada, gurizeiro.",
                "contribution": []
            },
            {
                "id": 482,
                "title": "Gurizear",
                "description": "1. Ato de \"dar de guri\"\n2. Infantilidade\n3. \"Deixar alguém na mão\"",
                "contribution": []
            },
            {
                "id": 108,
                "title": "Haedo",
                "description": "Coxilha localizada no sul do município de Livramento.",
                "contribution": []
            },
            {
                "id": 114,
                "title": "Haraganear",
                "description": "O animal que anda solto por muito tempo, sem prestar serviço algum tornando-se arisco. Também se aplica, em sentido figurado, às pessoas, significando vadiar, gauderiar, vagabundear, andar sem ocupação, passear de um lado para outro sem procurar serviço.",
                "contribution": []
            },
            {
                "id": 109,
                "title": "Hechor",
                "description": "Asno ou burro que serve de garanhão para fecundar as éguas, a fim de promover a hibridação de que resulta o gado muar, isto é, as mulas.",
                "contribution": []
            },
            {
                "id": 112,
                "title": "Hep",
                "description": "Usa-se no campo para excitar os animais a andarem.",
                "contribution": []
            },
            {
                "id": 111,
                "title": "Heréu",
                "description": "Herdeiro, dono, proprietário.",
                "contribution": []
            },
            {
                "id": 110,
                "title": "Hom",
                "description": "Interjeição ‘Hum!’",
                "contribution": []
            },
            {
                "id": 113,
                "title": "Horneiro",
                "description": "O mesmo que João-de-Barro.",
                "contribution": []
            },
            {
                "id": 115,
                "title": "Horteleiro",
                "description": "Hortelão.",
                "contribution": []
            },
            {
                "id": 117,
                "title": "Hosco",
                "description": "O mesmo que osco.",
                "contribution": []
            },
            {
                "id": 116,
                "title": "Hospe",
                "description": "Abreviação de hóspede.",
                "contribution": []
            },
            {
                "id": 997,
                "title": "Ilex paraguariensis",
                "description": "Nome científico da erva mate.",
                "contribution": []
            },
            {
                "id": 120,
                "title": "Incherido",
                "description": "Presumido, ganjento, convencido, metido.",
                "contribution": []
            },
            {
                "id": 118,
                "title": "indiada",
                "description": "Grande quantidade de homens do campo.\nMas nós gaúchos usamos mesmo a expressão: \" Fizemos uma indiada!\" Que quer dizer: fizemos um programa de índio.",
                "contribution": []
            },
            {
                "id": 606,
                "title": "Índio véio",
                "description": "gaúcho de fibra ",
                "contribution": []
            },
            {
                "id": 381,
                "title": "Índio velho",
                "description": "[s.m.] Forma de tratamento utilizada entre pessoas com qualquer nível de conhecimento. Também pode ser utilizada na forma reduzida, apenas como \"índio\". (ex.: E aí, índio velho, como como é que tu tá?)\n",
                "contribution": []
            },
            {
                "id": 119,
                "title": "Infernizar",
                "description": "Aborrecer, impacientar, arreliar, enfadar, incomodar, apoquentar, amargurar.",
                "contribution": []
            },
            {
                "id": 517,
                "title": "Inflador",
                "description": "Bomba de encher bola, pneu, etc.",
                "contribution": []
            },
            {
                "id": 122,
                "title": "Inhapa",
                "description": "Gorjeta. \n\n*Contribuição do Alfabeto de Quaraí",
                "contribution": []
            },
            {
                "id": 127,
                "title": "Inhato",
                "description": "Que tem nariz curto e arrebitado; que tem nariz curto e arrebitado; que tem nariz chato.",
                "contribution": []
            },
            {
                "id": 128,
                "title": "Inhé",
                "description": "Onomatopeia designativa da voz dos sapos e das rãs.",
                "contribution": []
            },
            {
                "id": 123,
                "title": "Instrovenga",
                "description": "Instrumento ou máquina, de pouco valor.",
                "contribution": []
            },
            {
                "id": 367,
                "title": "Intanguida, encarangada",
                "description": "Quem sente muito frio",
                "contribution": []
            },
            {
                "id": 124,
                "title": "Inté",
                "description": "Até. Também significa “até logo”, “até outra vista”.",
                "contribution": []
            },
            {
                "id": 160,
                "title": "Interter",
                "description": "O mesmo que entreter. ",
                "contribution": []
            },
            {
                "id": 480,
                "title": "Inticá!",
                "description": "Significado: Provocar alguém. Pegar no pé",
                "contribution": []
            },
            {
                "id": 125,
                "title": "Inticar",
                "description": "Provocar, desafiar, mexer com alguém.",
                "contribution": []
            },
            {
                "id": 557,
                "title": "Ir aos pés",
                "description": "Defecar, realizar suas necessidades fisiológicas.",
                "contribution": []
            },
            {
                "id": 126,
                "title": "Isonero",
                "description": "Desassossegado, sem descanso.",
                "contribution": []
            },
            {
                "id": 121,
                "title": "isqueiro",
                "description": "O ânus; \"tá com coceira no isqueiro\": aquele que não  para quieto.",
                "contribution": []
            },
            {
                "id": 931,
                "title": "Isso é falta de laço!",
                "description": "Ampla utilização, desde um chilique de guria até um desfalque no caixa da cooperativa. ",
                "contribution": []
            },
            {
                "id": 1053,
                "title": "Ja tah se passando!",
                "description": "Passar dos limites, ofender.",
                "contribution": []
            },
            {
                "id": 754,
                "title": "Jacu",
                "description": "1. Sujeito pouco inteligente, besta, sem noção.\n2. Ave galiforme da família dos cracídeos que alimentam-se de frutas, folhas e brotos.",
                "contribution": []
            },
            {
                "id": 130,
                "title": "Jaguara",
                "description": "Pejorativo. sem crédito, adpto da lei do menor esforço...",
                "contribution": []
            },
            {
                "id": 129,
                "title": "Jaguatirica",
                "description": "Carnívoro felídeo, também chamado de maracajá e gato-do-mato-grande.",
                "contribution": []
            },
            {
                "id": 485,
                "title": "Japona",
                "description": "Casaco de lã ou outro tecido de grande poder de retenção de calor, usado em tempos de frio glacial como há nos Campos de Cima da Serra.",
                "contribution": []
            },
            {
                "id": 131,
                "title": "Jardineira",
                "description": "Carro de quatro rodas, puxado por cavalos, muito usado nas estâncias. Também significa dança antiga.",
                "contribution": []
            },
            {
                "id": 133,
                "title": "Jeta",
                "description": "Azar, má sorte.",
                "contribution": []
            },
            {
                "id": 796,
                "title": "Jiboiar",
                "description": "Ter um momento de descanso após a refeição. Leva esse nome porque enquanto faz a digestão a pessoa fica meio estirada, como uma jiboia após o almoço. Acontece quando a pessoa come demais.",
                "contribution": []
            },
            {
                "id": 132,
                "title": "Joaninha",
                "description": "Alfinete de segurança. Também significa jacundá.",
                "contribution": []
            },
            {
                "id": 134,
                "title": "Jogador",
                "description": "Osso do peito das aves, em forma de forquilha.",
                "contribution": []
            },
            {
                "id": 135,
                "title": "Jorna",
                "description": "Bebedeira, tomar uma jorna: embriagar-se.",
                "contribution": []
            },
            {
                "id": 136,
                "title": "Jornadear",
                "description": "Viajar a cavalo, caminhar.",
                "contribution": []
            },
            {
                "id": 594,
                "title": "Jucão",
                "description": "Mas que piá jucão esse.\nSeu jucão.\nO mesmo que bobo, trouxa.",
                "contribution": []
            },
            {
                "id": 639,
                "title": "Judiado",
                "description": "Machucado, sem forças, acabado, maltratado. \n\"Não judia o teu irmão, guri!",
                "contribution": []
            },
            {
                "id": 636,
                "title": "Judiar",
                "description": "machucar,beliscar, maltratar\n\n''não judia dele''\n\n''não belisca ele''",
                "contribution": []
            },
            {
                "id": 137,
                "title": "Judiaria",
                "description": "Malvadeza, maus tratos.",
                "contribution": []
            },
            {
                "id": 138,
                "title": "Junco",
                "description": "Planta com que, em alguns lugares, se preparam os acolchoados dos lombilhos.",
                "contribution": []
            },
            {
                "id": 139,
                "title": "Junta",
                "description": "Parelha de bois mansos que puxam lado a lado.",
                "contribution": []
            },
            {
                "id": 489,
                "title": "Kakedo",
                "description": "Pessoa que não vale nada.",
                "contribution": []
            },
            {
                "id": 774,
                "title": "Lá se foi o boi com a corda",
                "description": "Significa: acabou nao tem mais jeito afinal o boi escapou e levou até a corda junto. Se a corda ficasse, tu poderias até tentar laçar o boi, mas como foi-se o boi com a corda, não tem mais jeito.",
                "contribution": []
            },
            {
                "id": 141,
                "title": "Lábia",
                "description": "Habilidade na conversa.",
                "contribution": []
            },
            {
                "id": 142,
                "title": "Lacraia",
                "description": "Espécie de canoa.",
                "contribution": []
            },
            {
                "id": 656,
                "title": "Lagarteando",
                "description": "Diz-se do sujeito que está ao sol, aquecendo-se. \"Hoje tá bom pra pegar um chimas e ir pra Redença, lagartear\".",
                "contribution": []
            },
            {
                "id": 422,
                "title": "Lagartear",
                "description": "Sinônimo de dormir, descansar deitado ou expôr-se ao sol preguiçosamente.\nÉ comum que se coma bergamota ao se lagartear.",
                "contribution": [
                    "Os lagartos, por terem sangue frio, cprecisão tomar banho de sol, de preferencia sobre pedras, mesmo no verão."
                ]
            },
            {
                "id": 143,
                "title": "Lambada",
                "description": "Relhada, laçaço.",
                "contribution": []
            },
            {
                "id": 144,
                "title": "Lambança",
                "description": "Intriga, embrulhada, briga, bate-boca, enredo.",
                "contribution": []
            },
            {
                "id": 146,
                "title": "Lambão",
                "description": "Porcalhão, imundo, o que anda com roupas maltrapilhas e sujas.",
                "contribution": []
            },
            {
                "id": 572,
                "title": "Lambe graxa",
                "description": "Cachorro vira-lata, sem raça definida.\nEx: No meio da churrascada me aparece um lambe graxa esperando um osso cair da mão",
                "contribution": []
            },
            {
                "id": 145,
                "title": "Lambuja",
                "description": "O que se dá de vantagem nas apostas. O partido concedido ao adversário.",
                "contribution": []
            },
            {
                "id": 147,
                "title": "Lanchão",
                "description": "Pé muito grande. Aumentativo de lancha.",
                "contribution": []
            },
            {
                "id": 812,
                "title": "lanhado",
                "description": "arranhado, com a pele riscada....\nentrei naquele mato e saí todo lanhado do meio do espinharedo.",
                "contribution": []
            },
            {
                "id": 1015,
                "title": "Lanhar",
                "description": "Machucar, \"ralar\". Ex.: \"Mas eu vô te lanhá a pau, ô guri!\"",
                "contribution": []
            },
            {
                "id": 899,
                "title": "Lasquiado",
                "description": "Chinelão, enxerido, metido a besta\n\n*Contribuição do Alfabeto de Quaraí",
                "contribution": [
                    "Pessoa nojenta, repugnante, debochado, lacaio."
                ]
            },
            {
                "id": 597,
                "title": "Légua de beiço",
                "description": "Quando o lugar é distante!  distância incerta que na maioria das vezes, vale bem mais que uma légua, geralmente associada ao gesto de distender o lábio inferior; Ex. Aquele galpão fica uma légua de beiço!",
                "contribution": []
            },
            {
                "id": 952,
                "title": "Lenquiar o lombo a laço",
                "description": "Surrar alguém até o ponto de ferir.",
                "contribution": [
                    "Lenquiar eu não conheço...\n\nMas dizer.. \nTe liquida o lombo a laço...\njá passou por mim..",
                    "Lenquiar desconheço... Não seria: \"Rebenquear o lombo a laço\"?"
                ]
            },
            {
                "id": 574,
                "title": "Levar uma tunda de rabo de tatu",
                "description": "Equivalente a apanhar, ou levar uma camassada de pau.",
                "contribution": []
            },
            {
                "id": 148,
                "title": "Ligeiro",
                "description": "Nome dado ao indivíduo que viaja a pé pela via férrea.",
                "contribution": []
            },
            {
                "id": 391,
                "title": "Lindeiro",
                "description": "adj. vizinho de terra, terras que fazem fronteira direta uma com a outra",
                "contribution": []
            },
            {
                "id": 149,
                "title": "Linguiça",
                "description": "Trapaça.",
                "contribution": []
            },
            {
                "id": 151,
                "title": "Linterna",
                "description": "Lanterna",
                "contribution": []
            },
            {
                "id": 900,
                "title": "Livreto",
                "description": "Caderno pequeno para anotações. \n*Contribuição do Alfabeto de Quaraí",
                "contribution": []
            },
            {
                "id": 427,
                "title": "LIXIGUANA",
                "description": "Pequena abelha, parecida com um marimbondo, que produz mel delicioso. \"Bah, tá um frio de tirar LIXIGUANA\"",
                "contribution": [
                    "Conheço lixiguana como sendo um cabelo muito volumoso, geralmente algo do tipo black power! "
                ]
            },
            {
                "id": 442,
                "title": "Loco",
                "description": "Termo vago para designar sujeito do sexo masculino, sem juízo de valor ou de sua saúde mental. Alternativa: lôco",
                "contribution": []
            },
            {
                "id": 333,
                "title": "Loco de especial",
                "description": "Macanudo,Muito bom, excelente,gostoso, agradável",
                "contribution": []
            },
            {
                "id": 425,
                "title": "lomba",
                "description": "Terreno em declive.\n\"vou descer a lomba!\"",
                "contribution": []
            },
            {
                "id": 150,
                "title": "Lombeira",
                "description": "Preguiça, modorra, moleza no corpo.",
                "contribution": []
            },
            {
                "id": 794,
                "title": "Lonca",
                "description": "Pessoa que costuma fazer algo errado ou estranho. Ex: Jõao bateu em um poste - \"Mas é um lonca mesmo!!\"",
                "contribution": []
            },
            {
                "id": 154,
                "title": "Lonjura",
                "description": "A imensidade do campo, a distância.",
                "contribution": []
            },
            {
                "id": 908,
                "title": "Lonquear",
                "description": "Raspar, barbear, raspar o couro da rês com faca\n\"Rápido de lonquear rato dormindo.\"",
                "contribution": []
            },
            {
                "id": 935,
                "title": "Loqueou",
                "description": "Ficou louco.\nAplicação: Tu até loquoeu, o que estás pensando?",
                "contribution": []
            },
            {
                "id": 153,
                "title": "Lorota",
                "description": "Conversa sem importância, jactância, mentirosa, pabulagem, fanfarrice, banalidade, mentira, embuste.",
                "contribution": []
            },
            {
                "id": 152,
                "title": "Loscanha",
                "description": "Diz-se do indivíduo aluado, meio louco.",
                "contribution": []
            },
            {
                "id": 697,
                "title": "Louco de bom",
                "description": "Quando algo é muito bom.",
                "contribution": []
            },
            {
                "id": 698,
                "title": "Louco de especial",
                "description": "Quando algo é muito especial.",
                "contribution": []
            },
            {
                "id": 626,
                "title": "Má Tchê",
                "description": "Usado em momentos de indignação. Ex.: má tchê, que que tu ta fazendo parado aí ainda.",
                "contribution": []
            },
            {
                "id": 156,
                "title": "MACANUDO",
                "description": "Muito bom. Ótimo",
                "contribution": [
                    "macanudo é loco de especial"
                ]
            },
            {
                "id": 155,
                "title": "Maçaroca",
                "description": "Intriga, mexerico.",
                "contribution": []
            },
            {
                "id": 157,
                "title": "Macega",
                "description": "Arbusto rasteiro que viceja, em geral, nos campos de má qualidade. Pastagem. Capim alto.",
                "contribution": [
                    "Também chamo de macega quando um fio ou um maço de cabelo dá um nó muito complicado."
                ]
            },
            {
                "id": 159,
                "title": "Machucão",
                "description": "Pisadura; contusão.",
                "contribution": []
            },
            {
                "id": 859,
                "title": "Magal",
                "description": "Aquele que rebaixa o carro e costuma andar com o vidro do \"auto\" aberto com o braço para fora ouvindo música alta.\nA Vestimenta típica varia bastante porém sempre apresenta um acessório chamativo como por exemplo: Um belo chapéu ou fivela e, nos urbanos, o maldito boné e correntes no pescoço.\nAs músicas podem variar de acordo com a região: bailão, poperô de rádio e até pagode. Relatos recentes contam que até o \"Tecno brega\" vem sendo executado pelos magais.",
                "contribution": []
            },
            {
                "id": 682,
                "title": "Magra lebre",
                "description": "Termo usado para descrever uma situação complicada ou algo que não é satisfatório. Por exemplo: \"Só isso? Magra lebre\"",
                "contribution": []
            },
            {
                "id": 363,
                "title": "Magrão",
                "description": "adj.\n1. Pessoa de quem se omite o nome ou lhe é desconhecido. (ex.: Tchê, quem é aquele magrão ali?)\n2. Forma de tratamento que pode ser uitilizada entre pessoas com qualquer nível de conhecimento, inclusive desconhecidas. (ex.: Bah, magrão; me fizeste cair os butiá do bolso.)",
                "contribution": []
            },
            {
                "id": 982,
                "title": "mais à vontade que bugio em mato de boa fruta",
                "description": "Sentir-se em casa, à vontade. ",
                "contribution": []
            },
            {
                "id": 777,
                "title": "Mais agarrado que carrapato em gado magro",
                "description": "Muito apego, junto, com muita fome.\nEx: Grudado numa ripa de costela. Mais agarrado que carrapato em gado magro...",
                "contribution": []
            },
            {
                "id": 1086,
                "title": "Mais ansiado que anão em comício.",
                "description": "nervoso,inquieto,preocupado .",
                "contribution": []
            },
            {
                "id": 782,
                "title": "Mais apertado que sardinha em lata",
                "description": "Quando algo está muito cheio, como um ônibus, por exemplo. Quando não cabe mais nada, ninguém.",
                "contribution": []
            },
            {
                "id": 1117,
                "title": "Mais assustado que sapo em cancha de bocha",
                "description": "É uma frase.",
                "contribution": []
            },
            {
                "id": 729,
                "title": "Mais atravessado que fiofó de lagarto",
                "description": "Coisa mal feita, amadorismo, trabalho mal executado.",
                "contribution": []
            },
            {
                "id": 976,
                "title": "Mais beijada que anel de bispo",
                "description": "Quando a moça é muito namoradeira. ",
                "contribution": []
            },
            {
                "id": 840,
                "title": "Mais comprido que enterro de rico",
                "description": "Diz-se de um mate muito comprido ou de qualquer coisa muito demorada. ",
                "contribution": []
            },
            {
                "id": 514,
                "title": "Mais curto que coice de porco!",
                "description": "Auto explicativa",
                "contribution": []
            },
            {
                "id": 634,
                "title": "Mais enrolado que cristal pra viagem",
                "description": "Expressão utilizada no sentido literal, quando algo está enrolado mesmo, fisicamente. ",
                "contribution": []
            },
            {
                "id": 1012,
                "title": "Mais estropiado que cavalo de contrabandista",
                "description": "Expressão usada quando o gaúcho está muito doente ou muito cansado!",
                "contribution": []
            },
            {
                "id": 454,
                "title": "Mais faceiro que bugiu em mato de fruta!",
                "description": "Uma pessoa muito, mas muito feliz! ",
                "contribution": []
            },
            {
                "id": 1027,
                "title": "Mais faceiro que vivente embarcando em uma Kombi pro Bororé",
                "description": "Baseada em uma música do Mano Lima, surgiu em uma conversa entre amigos do 3° ano do colégio Farroupilha, após pesquisar, começamos a usar a expressão quando um dos guris falou sobre onde fica o distrito do Bororé, descobrindo que fica distante 470 km aproximadamente da capital da República Riograndense. Adicionamos a Kombi pois é um veículo comum no estado, sendo quase obrigatório em todas as famílias interioranas e também por sua capacidade interna e dirigibilidade.",
                "contribution": []
            },
            {
                "id": 1076,
                "title": "Mais fechado que porta de convento",
                "description": "Pessoa introvertida",
                "contribution": [
                    "Matuto"
                ]
            },
            {
                "id": 599,
                "title": "Mais inútil que cinzeiro em moto",
                "description": "Auto explicativa",
                "contribution": []
            },
            {
                "id": 977,
                "title": "Mais perdido que cusco em tiroteio",
                "description": "Diz-se de alguém perdido em comparação à desorientação de um cachorro em meio a um tiroteio.",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/113122381"
                ]
            },
            {
                "id": 755,
                "title": "Mais perfumado que mão de barbeiro",
                "description": "Pessoa muito perfumada, bem cheirosa.  ",
                "contribution": []
            },
            {
                "id": 842,
                "title": "Mais sujo que pau de galinheiro",
                "description": "Sujeito trapaceiro, larápio, sem vergonha...",
                "contribution": []
            },
            {
                "id": 529,
                "title": "Malito",
                "description": "[adj.] Vem do espanhol \"malito\", que é o diminutivo de mal. Atribui-se a quem está muito mal, muito debilitado ou em qualquer situação muito ruim. (ex.: Eu trabalhei tanto que estou malito.)",
                "contribution": []
            },
            {
                "id": 158,
                "title": "Maloqueiro",
                "description": "Aquele que vive em maloca ou em grupo de bandidos. Habitente de maloca.",
                "contribution": []
            },
            {
                "id": 161,
                "title": "Mamado",
                "description": "Aquele que se encontra embriagado.",
                "contribution": []
            },
            {
                "id": 715,
                "title": "Manco",
                "description": "Com a perna ou pata dianteira machucada, diferente de rengo, que se refere à pata de trás. ",
                "contribution": []
            },
            {
                "id": 331,
                "title": "Mandinho",
                "description": "Criança pequena. Sinônimo de guri, piá.   ",
                "contribution": []
            },
            {
                "id": 163,
                "title": "Maneta",
                "description": "Diz-se da pessoa que tem falta de um braço.",
                "contribution": []
            },
            {
                "id": 633,
                "title": "Manga",
                "description": "1. Chuva forte e rápida.\n2. Mangueira de plástico, mangueira de jardim.",
                "contribution": []
            },
            {
                "id": 630,
                "title": "Manguá",
                "description": "Instrumento usado para debulhar feijão feito com uma vara e arames na ponta",
                "contribution": []
            },
            {
                "id": 451,
                "title": "Manguaça",
                "description": "bebedeira, ficar muito bêbado.\nEx.: ontem ele ficou na maior manguaça",
                "contribution": []
            },
            {
                "id": 162,
                "title": "Manotaço",
                "description": "Pancada que o cavalo dá com uma das patas dianteiras, ou com ambas.\n\nBofetada, pancada com a mão dada por pessoa. ",
                "contribution": []
            },
            {
                "id": 922,
                "title": "Maomeno",
                "description": "Contração de mais ou menos. Em alguns pontos do estado, se diz \"marromeno\". ",
                "contribution": []
            },
            {
                "id": 320,
                "title": "Maricas",
                "description": "Homem que se ocupa de trabalhos próprios de mulheres. Homem efeminado. Homem que gosta de intrometer-se em assuntos reservados a mulher",
                "contribution": [
                    "Também conhecido como alguém que foge da peleia"
                ]
            },
            {
                "id": 870,
                "title": "Maroto",
                "description": "Mesmo que caborteiro, difícil de domar...",
                "contribution": []
            },
            {
                "id": 923,
                "title": "Marro",
                "description": "Porrada, Soco, Paulada. ex.: Vou te dar um marro na cara! Dei-lhe um marro nos corno!\n",
                "contribution": []
            },
            {
                "id": 1070,
                "title": "Mas ai sim",
                "description": "espanto, ficar admirado com algo.",
                "contribution": []
            },
            {
                "id": 513,
                "title": "Mas Daonde",
                "description": "quando não acreditamos em algo, ou duvidamos. é falado bem cada som da sílaba.",
                "contribution": []
            },
            {
                "id": 702,
                "title": "Mas Nem Te Apresenta!",
                "description": "Quando a pessoa tá com pouca moral, falando algo sem credibilidade.",
                "contribution": []
            },
            {
                "id": 1069,
                "title": "Mascando brim",
                "description": "Com as calça (calção, bermuda, o que for) atolado no rego.",
                "contribution": []
            },
            {
                "id": 289,
                "title": "mate",
                "description": "bebida resultante da infusão de folhas da Ilex paraguaiensis, nossa conhecida erva mate devidamente preparada, que se toma em cuia com o auxílio de uma bomba ou em taças. ",
                "contribution": [
                    "O chimas ou chima. É o mesmo que amargo"
                ]
            },
            {
                "id": 624,
                "title": "matear",
                "description": "Sinônimo de tomar chimarrão.\nEx: Vamos matear na praça?\n",
                "contribution": []
            },
            {
                "id": 948,
                "title": "Mateira",
                "description": "Espécia de bolsa, feita normalmente de couro, onde se leva os aparatos pra se fazer chimarrão: garrafa térmica, cuia, bomba e a embalagem de erva mate.",
                "contribution": []
            },
            {
                "id": 294,
                "title": "matreira",
                "description": "que vive no mato, arisca, fugidia, animal que dificilmente se deixa apanhar. Diz-e também de pessoa esquiva, que foge a tudo .",
                "contribution": []
            },
            {
                "id": 862,
                "title": "Matucho",
                "description": "Gaúcho do Mato Grosso. ",
                "contribution": []
            },
            {
                "id": 985,
                "title": "Matungo",
                "description": "Cavalo vagabundo. É para os cavalos o que o guaipeca é para os cachorros.",
                "contribution": []
            },
            {
                "id": 1040,
                "title": "Maturrengo",
                "description": "Mau cavaleiro.",
                "contribution": []
            },
            {
                "id": 1042,
                "title": "Matusco",
                "description": "Semelhante a \"matuto\". Adjetivo utilizado para designar uma pessoa desajeitada.",
                "contribution": []
            },
            {
                "id": 849,
                "title": "Maula",
                "description": "Frouxo, depreciado, sem nenhum valor...",
                "contribution": []
            },
            {
                "id": 393,
                "title": "Mazah",
                "description": "(Também \"mazá\".) Corruptela de \"mas, ah!\". Interjeição de satisfação referente a algo, uma pessoa ou situação. Exemplo: \"Mazah, galo veio!\"\n\n",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/67422143",
                    "https:\/\/api.soundcloud.com\/tracks\/71686141",
                    "https:\/\/api.soundcloud.com\/tracks\/142229891"
                ]
            },
            {
                "id": 655,
                "title": "Me abri pra ti",
                "description": "Algo como: \" tu é o cara mesmo!\". Tirei o chapéu.",
                "contribution": []
            },
            {
                "id": 487,
                "title": "Me caíram os butiá do bolso!",
                "description": "Expressão que denota espanto, incredulidade.\nOs jurados desclassificaram o declamador porque estava calçando alpargatas? Bah!!! Me caíram os butiá do bolso com essa!!!\n",
                "contribution": []
            },
            {
                "id": 847,
                "title": "Me caiu a faca da mão!",
                "description": "Ficar sem ação, paralisado. ",
                "contribution": []
            },
            {
                "id": 456,
                "title": "Me caiu as trança!",
                "description": "Fiquei decepcionado!",
                "contribution": []
            },
            {
                "id": 357,
                "title": "Me caiu os butia do bolso",
                "description": "É uma expressão regionalista típica do Rio Grande do Sul.\nUsa-se quando a pessoa quer dizer que está impressionada, assustada ou estupefada.\nA expressão é usada porque o butiá é uma fruta pequena, pouco maior que uma bola de gude, dando a idéia de que quando se pára de sopetão, eles facilmente caem dos bolsos.\nEx.: 'Quando descobri que até a Samantha participou, me caiu os butiá do bolso!'",
                "contribution": [
                    "Uma variação da expressão é \"me caiu os guri da carroça\".",
                    "Mais uma variação seria \"me caiu os botão da camisa\"."
                ],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/111020378"
                ]
            },
            {
                "id": 567,
                "title": "ME dormi",
                "description": "Dormir além do horário, atrasar-se",
                "contribution": []
            },
            {
                "id": 1072,
                "title": "Me froxa",
                "description": "Quando alguém está te incomodando, se arriando, tu fala: mas me froxa, tchê!",
                "contribution": []
            },
            {
                "id": 521,
                "title": "Me pisei",
                "description": "Machuquei, me feri",
                "contribution": []
            },
            {
                "id": 992,
                "title": "Me primeriô",
                "description": "Chegar em primeiro lugar, chegar antes, fazer alguma coisa antes que alguém.",
                "contribution": []
            },
            {
                "id": 1035,
                "title": "Me pula sexta feira",
                "description": "Quando tem um dia especial essa expressão é usada. digamos não vejo a hora desse dia chegar.",
                "contribution": []
            },
            {
                "id": 727,
                "title": "Me tapei de nojo!",
                "description": "\"Entrei no elevador e o cidadão, ali, fumando. Bah, mas me tapei de nojo, tchê!\"",
                "contribution": []
            },
            {
                "id": 613,
                "title": "Me tapei de quero-quero",
                "description": "Sair correndo no estilo Usain Bolt.",
                "contribution": []
            },
            {
                "id": 329,
                "title": "Melena",
                "description": "Cabelo?\nCabelo volumoso e normalmente desajeitado.",
                "contribution": [
                    "Atucanado\n\n",
                    "Abombado - vivente tristonho, cansado, injuriado"
                ]
            },
            {
                "id": 165,
                "title": "Menear",
                "description": "Dar golpes com a mão. Executar qualquer coisa com as mãos. Manejar.",
                "contribution": []
            },
            {
                "id": 416,
                "title": "Mensú",
                "description": "Indio colono, de fora, não habituado com a cidade",
                "contribution": []
            },
            {
                "id": 166,
                "title": "Mequetrefe",
                "description": "Diz-se do indivíduo vagabundo, tratante, capadócio, acanalhado, fanfarrão.",
                "contribution": []
            },
            {
                "id": 164,
                "title": "Mercadinho",
                "description": "Pequena casa de comércio onde se faz venda de frutas e cereais.  O que no Rio de Janeiro e São Paulo se chama de quintanda.",
                "contribution": []
            },
            {
                "id": 351,
                "title": "Merece",
                "description": "Sinônimo de \"de nada\" em resposta a \"muito obrigada\".",
                "contribution": [
                    "Essa é clássica da região Sul do Estado... Muito legal"
                ]
            },
            {
                "id": 1063,
                "title": "Merecundência",
                "description": "Falta de respeito, sem explicação",
                "contribution": []
            },
            {
                "id": 762,
                "title": "Metido a facão sem cabo",
                "description": "Parece ser valente, mas na verdade não é de nada.",
                "contribution": []
            },
            {
                "id": 617,
                "title": "Meu Favor!",
                "description": "Meu Deus! Expressão de espanto.",
                "contribution": []
            },
            {
                "id": 370,
                "title": "Michar",
                "description": "v int.\n1. Desistir.\n2. Desanimar, esmurecer.\n3. Colocar empecílhos.\n4. Declinar ou rejeitar oportunidades e convites.\n(ex. O time não pode se michar; é difícil mas podemos vencer.)",
                "contribution": []
            },
            {
                "id": 854,
                "title": "Michorna",
                "description": "Confusão, bagunça, coisas viradas do avesso. ",
                "contribution": []
            },
            {
                "id": 780,
                "title": "Migué",
                "description": "Ato de enganar, encobrir, mentir. \"O fulano me deu um migué dizendo que vinha hoje, mas até agora não apareceu\". ",
                "contribution": []
            },
            {
                "id": 1065,
                "title": "Mijada",
                "description": "Chamar atenção de alguém. Ex. O professor deu uma mijada no aluno porque ele tentou colar na prova.",
                "contribution": []
            },
            {
                "id": 167,
                "title": "Milicada",
                "description": "Grupo de milicos. O mesmo que milicama.",
                "contribution": []
            },
            {
                "id": 405,
                "title": "Mimosa (o)",
                "description": "Pessoa querida, bonita, agradável\nEx: Que mimosa essa guria!",
                "contribution": []
            },
            {
                "id": 168,
                "title": "Mingo",
                "description": "Pequeno, menor, mínimo: “o dedo mingo”, o mínimo; “a costela minga”, a menor costela.",
                "contribution": []
            },
            {
                "id": 347,
                "title": "minguado",
                "description": "desprovido de corpo (substância).",
                "contribution": []
            },
            {
                "id": 1143,
                "title": "Minuano",
                "description": "referência há vento andino; frio e seco, que sopra do sudoeste no inverno.",
                "contribution": []
            },
            {
                "id": 169,
                "title": "Mirador",
                "description": "Pequena e elevada construção no alto das casas, para gozo de largas perspectivas.  O mesmo que mirante.",
                "contribution": []
            },
            {
                "id": 703,
                "title": "Mixaria",
                "description": "Algo com pouco valor, que não é de nada.",
                "contribution": []
            },
            {
                "id": 170,
                "title": "Môcha",
                "description": "Mulher de seios pequenos.",
                "contribution": [
                    "Vaca sem guampa."
                ]
            },
            {
                "id": 799,
                "title": "Mocó",
                "description": "Local escondido, esconderijo. \"Vou ficar no meu mocó hoje.\"",
                "contribution": []
            },
            {
                "id": 800,
                "title": "Mocosado",
                "description": "Ficar escondido. \"Tô a fim de ficar mocosado\"",
                "contribution": []
            },
            {
                "id": 926,
                "title": "Mondonguinho",
                "description": "Também conhecido como bucho, ou \"dobradinha\". É exatamente isso, o bucho do boi. Geralmente preparado com molho vermelho e acompanhado por pão colonial pra \"potchar\" no molho.",
                "contribution": []
            },
            {
                "id": 1021,
                "title": "Monteador",
                "description": "Quem costuma caçar ou até simplesmente quem vive em região montanhosa.",
                "contribution": []
            },
            {
                "id": 917,
                "title": "Moquear",
                "description": "Esconder, ocultar. ",
                "contribution": []
            },
            {
                "id": 705,
                "title": "Moquiado",
                "description": "Quando o indivíduo se faz de morto. ",
                "contribution": []
            },
            {
                "id": 460,
                "title": "Morocha",
                "description": "[adj.] Forma de tratamento utilizada para uma mulher com quem se tem bastante intimidade, como a cônjuge ou companheira. É uma palavra de origem espanhola, que também quer dizer \"morena\". (ex.: Mas que saudade eu tava de ti, morocha.)",
                "contribution": []
            },
            {
                "id": 171,
                "title": "Mosquear",
                "description": "Quando o cavalo movimenta a cola para espantar as moscas que o perseguem, ou fazer tal movimento quando é açoitado ou esporeado.",
                "contribution": []
            },
            {
                "id": 543,
                "title": "mugre",
                "description": "sujeira. Do cast. mugre",
                "contribution": []
            },
            {
                "id": 1057,
                "title": "Muita mão",
                "description": "Desculpa para se negar a fazer algo por ser muito trabalho. \"Bah, muita mão ir buscar lenha\"\n\nVariação: alta mão. ",
                "contribution": []
            },
            {
                "id": 431,
                "title": "MULITA",
                "description": "Pequeno tatu (Dasypus hybridus) encontrado nos campos do sul do Brasil. \"Pra se segurar no barranco, cravou as unha na terra como MULITA cavando buraco\"",
                "contribution": []
            },
            {
                "id": 717,
                "title": "Munaia",
                "description": "Algo grande.",
                "contribution": []
            },
            {
                "id": 621,
                "title": "mundaréu",
                "description": "muito, bastante",
                "contribution": []
            },
            {
                "id": 829,
                "title": "Muquiço",
                "description": "Usado no RS pra se referir a alguém sujo, ou a alguma lugar sujo e bagunçado. ",
                "contribution": []
            },
            {
                "id": 723,
                "title": "Muquifo",
                "description": "Lugar sujo, desagradável.\nEx: Aquele hotel era um muquifo.",
                "contribution": []
            },
            {
                "id": 654,
                "title": "Na capa da gaita",
                "description": "Quando a pessoa está muito cansada. Diz-se também de indivíduo muito velho ou muito debilitado. ",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/60729635"
                ]
            },
            {
                "id": 909,
                "title": "Na corrida",
                "description": "Ligeiro, depressa, acelerado. \nSignifica que algo deve ser feito muito rápido, sem perda de tempo.\nExemplos: \nVai lá, na corrida.\nVai compra um refri, na corrida.",
                "contribution": []
            },
            {
                "id": 461,
                "title": "Na manha",
                "description": "[prep. + s.f.] Tranquilo; sem compromissos ou preocupações. (ex.: Ontem eu tive muito trabalho, mas hoje eu estou na manha.) 2. Lentamente; devagar; sem se esforçar. (ex.: Vamos na manha, ainda falta muito tempo para a reunião começar.)",
                "contribution": []
            },
            {
                "id": 805,
                "title": "Na ponta dos cascos",
                "description": "Quando o indivíduo anda sorrateiramente, com todo o cuidado, tentando não fazer barulho. Também é utilizado para designar o indivíduo que está 100%, no melhor de sua forma.",
                "contribution": []
            },
            {
                "id": 415,
                "title": "Na raiz",
                "description": "Em cheio, na mosca. Ex: deu um tapa na raiz da orelha",
                "contribution": []
            },
            {
                "id": 172,
                "title": "Naco",
                "description": "Naca. Pedaço de fumo ou de carne.",
                "contribution": []
            },
            {
                "id": 680,
                "title": "Namorido",
                "description": "Namorado que vive com a namorada, e se comporta como marido.",
                "contribution": []
            },
            {
                "id": 173,
                "title": "Naniquice",
                "description": "Pequenez, pouca altura.",
                "contribution": []
            },
            {
                "id": 765,
                "title": "Não ata nem desata.",
                "description": "Indeciso,  pensativo além do comum, enrolador...",
                "contribution": []
            },
            {
                "id": 675,
                "title": "Não caga nem desocupa a moita",
                "description": "Expressão usada para o sujeito que não se decide. Não vai nem fica. Não anda nem desanda.",
                "contribution": []
            },
            {
                "id": 653,
                "title": "Não dá nada",
                "description": "Algo como: \"não te preocupa, isso não vai nos trazer problemas futuros\". Ou simplesmente: \"Não esquenta\".",
                "contribution": []
            },
            {
                "id": 964,
                "title": "Não é farinha de fazer hóstia",
                "description": "Indivíduo dado a andar pelos caminhos tortos da vida.",
                "contribution": []
            },
            {
                "id": 763,
                "title": "Não emprenha nem sai de cima.",
                "description": "Não se decide, fica no meio termo, indeciso,....",
                "contribution": []
            },
            {
                "id": 700,
                "title": "Não me faz te pegar nojo!",
                "description": "Quando alguém faz algo nada admirável.",
                "contribution": []
            },
            {
                "id": 1025,
                "title": "Não tá morto quem peleia!",
                "description": "Não está morto quem ainda disputa. Enquanto lutamos temos chance de vencer.",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/113124361"
                ]
            },
            {
                "id": 957,
                "title": "Não te acadela",
                "description": "Não te bobeia, não te faz de louco!",
                "contribution": []
            },
            {
                "id": 175,
                "title": "Nascido",
                "description": "Leicenço, furúnculo. Diz-se, por exemplo: “tenho um nascido no braço”. Termo muito usado na campanha.",
                "contribution": []
            },
            {
                "id": 174,
                "title": "Nazarenas",
                "description": "Esporas grandes. Usa-se também como adjetivo: esporas nazarenas.",
                "contribution": []
            },
            {
                "id": 176,
                "title": "Negaça",
                "description": "Esconderijo especial construído com ramos de árvore, em forma de círculo, em cujo o meio o caçador se oculta para atirar nos bandos de marrecões ou marrecas que passam voando.",
                "contribution": []
            },
            {
                "id": 180,
                "title": "Negalhas",
                "description": "Pequena porção, quantidade insignificante.",
                "contribution": []
            },
            {
                "id": 457,
                "title": "Negão",
                "description": "[adj.] Forma de tratamento utilizada entre pessoas com qualquer nível de conhecimento entre si. (ex.: E aí, negão, como é que tu vais?) 2. [adj.] Pessoa de quem se omite o nome ou lhe é desconhecido, independentemente de qualquer alusão a etnia. (ex.: Bah, mas como é mesmo o nome daquele negão que joga de atacante?)",
                "contribution": []
            },
            {
                "id": 179,
                "title": "negrinho",
                "description": "sinônimo de brigadeiro doce de chocolate muito usado em festas de aniversario",
                "contribution": []
            },
            {
                "id": 853,
                "title": "Nem que a vaca tussa!",
                "description": "De jeito nenhum, de maneira alguma...",
                "contribution": []
            },
            {
                "id": 181,
                "title": "Nhonhô",
                "description": "Tratamento familiar dado aos meninos, pelos escravos.",
                "contribution": []
            },
            {
                "id": 177,
                "title": "Nicada",
                "description": "Batida de uma bola de vidro em outra, conhecido jogo infantil.",
                "contribution": []
            },
            {
                "id": 182,
                "title": "Niqueleira",
                "description": "Porta-níqueis, bolsinha pequena.",
                "contribution": []
            },
            {
                "id": 342,
                "title": "Nó cego",
                "description": "Enrolado, mal pagador, lento, molenga, atrapalhado ruim ",
                "contribution": []
            },
            {
                "id": 364,
                "title": "Nó nas costas",
                "description": "Mania; excessivo; mau costume; esquisitice.. Exemplo: O fulano é cheio de nó nas costas! (Fulano é cheio de manias)",
                "contribution": []
            },
            {
                "id": 183,
                "title": "Nonato",
                "description": "Não nascido. O terneiro tirado do ventre da vaca que foi carneada.",
                "contribution": []
            },
            {
                "id": 959,
                "title": "Nos pé da égua",
                "description": "Quando a pessoa está passando por uma dificuldade, está mal",
                "contribution": []
            },
            {
                "id": 858,
                "title": "Nos pés da égua",
                "description": "Diz-se do indivíduo muito cansado...",
                "contribution": []
            },
            {
                "id": 184,
                "title": "Noviço",
                "description": "Cavalo novo. Pessoa inexperiente.",
                "contribution": []
            },
            {
                "id": 589,
                "title": "nulidade",
                "description": "Pessoa sem mérito nenhum, índio inútil, sem serventia, quem não presta para nada.",
                "contribution": []
            },
            {
                "id": 185,
                "title": "Nútria",
                "description": "Ratão do banhado.",
                "contribution": []
            },
            {
                "id": 178,
                "title": "Nuvem",
                "description": "Velhaco, vivo, esperto, finório, perspicaz, atilado, pouco escrupuloso. Emprega-se também como substantivo: o que andará fazendo esta nuvem?”,  isto é, este sujeito de vida equívoca e pouco limpa.",
                "contribution": []
            },
            {
                "id": 848,
                "title": "O ninho está para um lado e a galinha canta para o outro.",
                "description": "Quando alguém tenta enganar o outro, dizer que vai pra um lugar, mas na verdade vai pra outro...",
                "contribution": []
            },
            {
                "id": 652,
                "title": "O que é um peido pra quem tá cagado",
                "description": "Muito usada para justificar uma atitude inesperada para alguém em situação desfavorável, sobretudo  financeiramente.",
                "contribution": []
            },
            {
                "id": 965,
                "title": "O risco e o fedor",
                "description": "Diz-se da chinoca mui magra, pois está tão magra que parece ter sido reduzida apenas ao \"risco e o fedor\", referência à vagina (risco) e ao ânus (fedor). Ex.: \"Essa guria está que é só o risco e o fedor!\", significando que a tal está muito magra. Expressão erroneamente utilizada também para o gênero masculino atualmente por desconhecimento de sua origem destinada exclusivamente ao gênero feminino.",
                "contribution": []
            },
            {
                "id": 200,
                "title": "Obedeença",
                "description": "Obediência.",
                "contribution": []
            },
            {
                "id": 544,
                "title": "Obrar",
                "description": "Evacuar, defecar.",
                "contribution": []
            },
            {
                "id": 187,
                "title": "Obrigação",
                "description": "A família, os filhos. Diz um amigo a outro: “como vai a obrigação?”, isto é, como passa a família?.",
                "contribution": []
            },
            {
                "id": 387,
                "title": "Ocalípio",
                "description": "O mesmo que eucalipto.",
                "contribution": []
            },
            {
                "id": 188,
                "title": "Ôche!",
                "description": "Interjeição usada pelos carreteiros para fazer parar a carreta ou diminuir a marcha. É usada também quando se quer acalmar o boi que se quer pegar.",
                "contribution": []
            },
            {
                "id": 186,
                "title": "Oigalê",
                "description": "exprime admiração, espanto, alegria.\nOigalê tchê porquera!",
                "contribution": []
            },
            {
                "id": 191,
                "title": "Onça",
                "description": "Moeda antiga, de ouro.",
                "contribution": []
            },
            {
                "id": 192,
                "title": "Ontonte",
                "description": "Anteontem, antes de ontem.",
                "contribution": []
            },
            {
                "id": 189,
                "title": "Orear",
                "description": "Expor ao ar ou ao vento qualquer coisa úmida: “orear a roupa, orear o charque fresco”. Secar por meio do vento: “estamos esperando que oreie um pouco o terreno para seguir viagem”.",
                "contribution": []
            },
            {
                "id": 492,
                "title": "Orelhano",
                "description": "Gado criado solto, sem dono. Sinônimo de gado \"alçado\" ou \"chimarrão\". A expressão deve-se ao nome do jesuíta Cristóbal de Mendoza Orellana, que introduziu o gado vacum na América do Sul.\nA expressão foi popularizada pela música nativista de mesmo nome.\n",
                "contribution": []
            },
            {
                "id": 193,
                "title": "Orelhar",
                "description": "Segurar o animal, cavalar ou muar, que será domado, por uma ou pelas duas relhas, para facilitar que o domador o monte.",
                "contribution": []
            },
            {
                "id": 190,
                "title": "Oriental",
                "description": "Adjetivo com que denominamos a República do Uruguai, apesar de ficar ao ocidente da nossa. Termo da antiga colônia espanhola.",
                "contribution": []
            },
            {
                "id": 194,
                "title": "Orina",
                "description": "Urina.",
                "contribution": []
            },
            {
                "id": 195,
                "title": "Orizícola",
                "description": "Que cultiva arroz: “países orizícolas”.",
                "contribution": []
            },
            {
                "id": 196,
                "title": "Orre",
                "description": "Interjeição que exprime satisfação por ter acontecido algo de mau a um adversário ou inimigo.",
                "contribution": []
            },
            {
                "id": 197,
                "title": "Ossamenta",
                "description": "Carcaça, esqueleto. Em sentido figurado, o corpo da pessoa.",
                "contribution": []
            },
            {
                "id": 1124,
                "title": "Ou caga ou desocupa a moita",
                "description": "Decida-se",
                "contribution": []
            },
            {
                "id": 199,
                "title": "Ovelha",
                "description": "Em sentido figurado, a pessoa má conselheira, a que, por mau exemplo, põe as outras a perder. “Uma ovelha mestra põe o rebanho a perder.”",
                "contribution": []
            },
            {
                "id": 198,
                "title": "Ovelheiro",
                "description": "Cusco, cão parceiro da lida de campo, pastor de ovelha.",
                "contribution": [
                    "Oveiero, este é o sotaque, se usa também para cães que atacam rebanho de ovelhas."
                ]
            },
            {
                "id": 201,
                "title": "Pacau",
                "description": "Jogo de cartas usado na fronteira. Também significa o indivíduo que não possui um dedo. “Bater o pacau” significa morrer.",
                "contribution": []
            },
            {
                "id": 202,
                "title": "Pacotilha",
                "description": "Quadrilha feita de malfeitores.",
                "contribution": []
            },
            {
                "id": 530,
                "title": "Pago",
                "description": "[s.m.] Lugar ou região com a qual se tem uma ligação afetiva, por ter sido o local de nascença, de criação, por ter-se radicado ou por qualquer outro motivo que o valha. Lar. Pátria. [consulta também: \"rincão\" e \"querência\"] (ex.: Amo o Rio Grande do Sul porque esse é o meu pago.)",
                "contribution": []
            },
            {
                "id": 632,
                "title": "Pai de fogo",
                "description": "Madeira bem grossa colocada no fogo para que ele não apague por um longo tempo.",
                "contribution": []
            },
            {
                "id": 428,
                "title": "Paisano",
                "description": "Paisano: homem que não é militar, guerreiro civil, diz-se de militar quando anda sem farda! Também do amigo e companheiro o paisano também aquele que é conhecido de longa data, no Rio Grande do Sul. Expressão provavelmente espanhola, usada na banda oriental (Uruguai) . Uma tropa de paisanos passou a fronteira!\n",
                "contribution": []
            },
            {
                "id": 301,
                "title": "Pala",
                "description": "[s.m.] Poncho de pala é o de fazenda mais fina que o de bichará, e com as pontas arredondadas. É mais leve e mais curto, e na campanha é considerado como traje mais decente. (ex.: Vou colocar o meu pala mais bonito pra ir pra bailanta logo mais.) 2. [s.f.] Amostra. Exemplo. Exibição. Também pode ser encontrada na variação \"palha\" ou \"palhinha\". (ex.: Se tu és um bom gaiteiro, dá uma pala pra vermos o que tu sabes.)",
                "contribution": [
                    "Daniel Bittencourt; tomei a liberdade de acrescentar a classe gramatical e um exemplo à tua definição, bem como acrescentar uma outra definição que utilizamos como uma palavra homófona aqui em minha cidade. Espero ter contribuido."
                ]
            },
            {
                "id": 536,
                "title": "Palanque",
                "description": "Madeira para cerca",
                "contribution": []
            },
            {
                "id": 203,
                "title": "Palheiro",
                "description": "Cigarro de fumo crioulo, enrolado em palha de milho.",
                "contribution": []
            },
            {
                "id": 204,
                "title": "Palpitoso",
                "description": "Desejoso.",
                "contribution": []
            },
            {
                "id": 296,
                "title": "pampa",
                "description": "possui significados diversos. o mais comum é usar pampa para designar as extensas planícies do Rio Grande do Sul, Uruguai e Argentina, cobertas de passagens verdes onde vive o gado vacum e cavalar. ",
                "contribution": [
                    "\"Mas que pampa é essa que eu recebo agora com a missão de cultivar raízes.\" "
                ]
            },
            {
                "id": 205,
                "title": "Pança",
                "description": "Indivíduo ridículo. Também significa ventre, abdômen.",
                "contribution": []
            },
            {
                "id": 206,
                "title": "Pandorga",
                "description": "Pipa, Papagaio.",
                "contribution": [
                    "Pandorga"
                ]
            },
            {
                "id": 207,
                "title": "Pandulho",
                "description": "Barriga, pança.",
                "contribution": []
            },
            {
                "id": 551,
                "title": "Pangaré",
                "description": "Cavalo de pelagem indefinida. Não é comum de ser encontrado. \nex: Este cavalo é um baita de um pangaré!\n",
                "contribution": []
            },
            {
                "id": 208,
                "title": "Papata",
                "description": "Negociata, roubalheira, mamata.",
                "contribution": []
            },
            {
                "id": 330,
                "title": "Papudo",
                "description": "Balaqueiro, jactancioso, blasonador.\n\nO termo é empregado para insultar, provocar, depreciar, menosprezar outra pessoa, embora esta não tenha papo.",
                "contribution": [
                    "Papudo é um cara matreiro, quase um mentiroso. Um contador de história, história de pescador.\nO cara que mais fala do que faz.\n\nBaita papudo, esse vivente. "
                ]
            },
            {
                "id": 963,
                "title": "Parada",
                "description": "Conhecido também como ponto de ônibus",
                "contribution": []
            },
            {
                "id": 644,
                "title": "Passar o relho",
                "description": "Dar uma surra.",
                "contribution": []
            },
            {
                "id": 561,
                "title": "Pataquada",
                "description": "Trejeitos, expressões de ...",
                "contribution": []
            },
            {
                "id": 887,
                "title": "Pátio",
                "description": "Como sinônimo de quintal, usado na capital. Área ao redor da casa, normalmente calçada e usada para colocar automóvel, ou como área de estar, para cevar um mate em roda de chimarrão.",
                "contribution": []
            },
            {
                "id": 843,
                "title": "Pau pra toda a obra",
                "description": "Aquele que faz de tudo um pouco...",
                "contribution": []
            },
            {
                "id": 298,
                "title": "peão",
                "description": "Homem ajustado para fazer o serviço do campo.",
                "contribution": []
            },
            {
                "id": 209,
                "title": "Pechada",
                "description": "Batida de trânsito",
                "contribution": [
                    "Pechada derivou do castelhano como significado de batida frontal. No entanto, no RS se usa como batida entre veículos, mesmo que não frontalmente."
                ]
            },
            {
                "id": 1044,
                "title": "Pelando",
                "description": "\"Tchê, o mate está pelando\"\nMuito quente, de queimar a boca.",
                "contribution": []
            },
            {
                "id": 640,
                "title": "Pelear",
                "description": "Brigar, lutar, combater, pelejar, teimar, disputar.",
                "contribution": []
            },
            {
                "id": 721,
                "title": "Pelechar",
                "description": "Trocar de pêlo. Mudança estacional do pelame dos animais, que trocam de um pêlo mais grosso e aspero (para maior proteção do frio do inverno) por um pêlo mais fino e sedoso (para conviver com maior facilidade com o calor do verão). Na maioria das espécies (cavalos, bois, cães, gatos....) trocam de peêo entre o inverno e o verão.",
                "contribution": []
            },
            {
                "id": 973,
                "title": "Pelêgo",
                "description": "Trata-se de um pedaço de lã de carneiro, colocado sobre a sela e preso por uma tira de couro chamada barrigueira, para que não escorregue. Sua função é amaciar o assento do arreio de lida com o gado",
                "contribution": []
            },
            {
                "id": 321,
                "title": "Peleia",
                "description": "Briga, luta, desavença, disputa.\n",
                "contribution": []
            },
            {
                "id": 292,
                "title": "peonada",
                "description": "pionada ou pionagem; porção, grande número ou classe de peões; os empregados de uma estância ou casa ou os condutores de uma tropa. ",
                "contribution": []
            },
            {
                "id": 341,
                "title": "Perau",
                "description": "Precipício, barranco",
                "contribution": []
            },
            {
                "id": 627,
                "title": "Percanta",
                "description": "Moça bonita, apresentável.",
                "contribution": []
            },
            {
                "id": 1059,
                "title": "Perdi o canto",
                "description": "Oriundo de não escutar o canto do galo.\nSinônimo de se atrasar, perder o despertador.",
                "contribution": []
            },
            {
                "id": 322,
                "title": "Petiço",
                "description": "Cavalo pequeno, curto, baixo.",
                "contribution": []
            },
            {
                "id": 335,
                "title": "Pexada",
                "description": "Batida, esbarrada. ",
                "contribution": []
            },
            {
                "id": 399,
                "title": "piá",
                "description": "gurí, garoto, menino",
                "contribution": [
                    "Na minha cidade, utilizamos \"Piá\" para nos referirmos à homens, independente de idade, que temos muita amizade ou conhecemos \"desde os tempos de piá\".\nEx: \"E ai piá, como está?\""
                ]
            },
            {
                "id": 402,
                "title": "pialo",
                "description": "tombo, cair no chão",
                "contribution": [
                    "Passar mal"
                ]
            },
            {
                "id": 210,
                "title": "Piazada",
                "description": "Ajuntamento de piás. Gurizada, meninada, garotada.",
                "contribution": []
            },
            {
                "id": 808,
                "title": "Piazedo",
                "description": "Criançada, jovens. Exemplo, extraído do blog http:\/\/www.bombachalarga.org\/ver_poesia.php?id=139, poema Payador: \"...Deixaste nossos xucros corações num alvoroço;\ndeixaste o piazedo com olhos úmidos\ne falquejou os corações das prendas....\". ",
                "contribution": []
            },
            {
                "id": 733,
                "title": "Pichurum",
                "description": "Grupo de pessoas que se juntam para realizar um serviço para outra.",
                "contribution": []
            },
            {
                "id": 625,
                "title": "Picorrucho",
                "description": "Variável em \"gauchês\" da palavra em desuso no português \"pequerrucho\", que significa pequeno, de colo. Se usa geralmente de forma carinhosa pra se referir a uma criança pequena.",
                "contribution": []
            },
            {
                "id": 558,
                "title": "Piguancha",
                "description": "Chininha, chinoca",
                "contribution": []
            },
            {
                "id": 704,
                "title": "pila",
                "description": "Dinheiro, reais",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/111302632"
                ]
            },
            {
                "id": 531,
                "title": "PILETA",
                "description": "local onde se lava roupas, o mesmo que tanque.\n",
                "contribution": []
            },
            {
                "id": 958,
                "title": "Pinar",
                "description": "Sinônimo de sair. \nPor exemplo, aqui não é um bom lugar, vamos pinar daqui.\n\n",
                "contribution": []
            },
            {
                "id": 910,
                "title": "Pinchar",
                "description": "Jogar, atirar, arremessar.\nExemplo: Pinchei fora aquelas tranqueras.",
                "contribution": []
            },
            {
                "id": 302,
                "title": "pingo",
                "description": "é o cavalo do gaucho",
                "contribution": [
                    "Pingo, velho companheiro do gaúcho - ou do gaucho, em outras pampas e querências por esta América agora"
                ]
            },
            {
                "id": 734,
                "title": "Pinguancha",
                "description": "Mulher feia.",
                "contribution": []
            },
            {
                "id": 971,
                "title": "Pinica",
                "description": "O mesmo que bolita ou bolinha de gude.",
                "contribution": []
            },
            {
                "id": 360,
                "title": "Pior",
                "description": "Significa \"é mesmo\". \"Tem toda razão\"",
                "contribution": []
            },
            {
                "id": 1049,
                "title": "pisar",
                "description": "quando era piá ficava correndo atrás de um matungo múi arisco, e não tinha consciência da periculosidade, aí que a vó gritava: \"Guri, sai daí senão tu vai se pisar\" - sin. machucar, ferir, quebrar, torcer, rasgar",
                "contribution": []
            },
            {
                "id": 500,
                "title": "PISCA-PISCA",
                "description": "Sinal luminoso intermitente do automóvel, localizado lateralmente às sinaleiras e aos faróis, que indica a direção para a qual o motorista pretende convergir.",
                "contribution": []
            },
            {
                "id": 1128,
                "title": "Pito",
                "description": "Cigarro, fumo, crivo; Verbo: pitar.\nExemplo: pitava que parecia uma chaminé!",
                "contribution": []
            },
            {
                "id": 810,
                "title": "Plasta",
                "description": "Pessoa lerda, muito devagar, que não desenvolve uma tarefa com prontidão. ",
                "contribution": []
            },
            {
                "id": 701,
                "title": "Pode tirar o cavalo da chuva!",
                "description": "Quando não concorda com o que a outra pessoa está afirmando.",
                "contribution": []
            },
            {
                "id": 907,
                "title": "Pollo",
                "description": "Sinônimo de ¨frango¨. Como se diz em espanhol e também nessa região. ",
                "contribution": []
            },
            {
                "id": 728,
                "title": "Pombas (pombos)",
                "description": "1. Gurias, guris, namorados... \n2. Também é utilizado quando o indivíduo está incomodado com algo, de saco cheio. \"Pombas, tchê! Não fizeste o que te pedi.\"",
                "contribution": []
            },
            {
                "id": 1005,
                "title": "Porca pipa",
                "description": "Espanto, susto.",
                "contribution": []
            },
            {
                "id": 336,
                "title": "Porco Dio",
                "description": "expressão de raiva, de desapontamento, de decepção, de desacordo.",
                "contribution": []
            },
            {
                "id": 503,
                "title": "PORCO ZIO!",
                "description": "(do italiano; literalmente \"Tio Porco\") Interjeição de baixo calão usada em momentos de irritação e\/ou indignação. \"Má me voltou pra casa pinguço, PORCO ZIO!\"",
                "contribution": []
            },
            {
                "id": 549,
                "title": "Porongo",
                "description": "Cuia. Recipiente de madeira, usado para se tomar mate\/chimarrão. ",
                "contribution": [
                    "A cuia é feita do porongo que é uma espécie de planta rasteira, e não um recipiente de barro ou madeira."
                ]
            },
            {
                "id": 927,
                "title": "Potchar",
                "description": "Geralmente usa-se como sinônimo pra \"molhar\" o pão em algo, passar\/mergulhar no molho do fundo do prato, ou até mesmo no café.",
                "contribution": []
            },
            {
                "id": 465,
                "title": "Potranca",
                "description": "Substantivo feminino. Ser humano do sexo feminino. Mulher gostosa. Muito gostosa. Mulher provocante, de corpo bonito.",
                "contribution": []
            },
            {
                "id": 365,
                "title": "Pousar",
                "description": "v. intr. e pron.\nHospedar-se ou passar a noite na casa de alguém. (ex.: Chinoca, faz mais um chimarrão que o compadre vai pousar aqui hoje.",
                "contribution": []
            },
            {
                "id": 1030,
                "title": "Pra fora",
                "description": "Fora = Interior. \nEu moro pra fora, moro no interior.",
                "contribution": []
            },
            {
                "id": 651,
                "title": "Pra tu vê",
                "description": "Expressão usada para indicar a confirmação e\/ou surpresa em determinada situação. \"A guria me deu um pé na bunda. Pra tu vê como são as coisas\".",
                "contribution": []
            },
            {
                "id": 684,
                "title": "Prenda",
                "description": "Menina bonita, moça, faz o par do gaúcho. Também pode significar presente, dádiva.Qualidade, dom.\nAptidão; conhecimentos; arte; habilidade.",
                "contribution": []
            },
            {
                "id": 409,
                "title": "Prender fogo",
                "description": "Ato de incendiar alguma coisa.",
                "contribution": []
            },
            {
                "id": 635,
                "title": "Prender o grito",
                "description": "Significa falar, dizer, avisar, ou seja, soltar o grito quando se precisa de ajuda.",
                "contribution": []
            },
            {
                "id": 741,
                "title": "Puchero",
                "description": "Iguaria feita com carne (de preferência peito de boi gordo) e vários tipos de hortaliças. Tudo muito bem temperado com vários condimentos...",
                "contribution": []
            },
            {
                "id": 823,
                "title": "Pudim de trago",
                "description": "Quem bebe muito, que fica alcoolizado com frequência. ",
                "contribution": []
            },
            {
                "id": 769,
                "title": "Pular a cerca",
                "description": "Trair o cônjuge, sair fora das regras conjugais, se engraçar por outra pessoa...",
                "contribution": []
            },
            {
                "id": 970,
                "title": "Puteada",
                "description": "Dar um, pito, xingar. \nApl. O guri só parou depois de levar uma puteada.",
                "contribution": []
            },
            {
                "id": 710,
                "title": "Putz Grila!",
                "description": "Expressão usada quando algo da errado, ou expressão de espanto.",
                "contribution": []
            },
            {
                "id": 993,
                "title": "Quadrados",
                "description": "Bandeja de grande tamanho, normalmente de folha de zinco, utilizada para quarar ou clarear roupa no sol.",
                "contribution": []
            },
            {
                "id": 211,
                "title": "Quadrilha",
                "description": "Grupo ou lote de animais cavalares de pelos diferentes, que costumam andar juntos, acompanhando a égua-madrinha.",
                "contribution": []
            },
            {
                "id": 994,
                "title": "Quarador",
                "description": "Bandeja de grande dimensão, normalmente fabricada com folha de zinco, utilizada para clarear roupa ao Sol. \n",
                "contribution": []
            },
            {
                "id": 972,
                "title": "Quê Borracheira!",
                "description": "Exclamação usada para dizer que estás de porre.. ou se usada no outro dia.. afirmando a tua ressaca.",
                "contribution": []
            },
            {
                "id": 1056,
                "title": "Que Correriu!",
                "description": "Muito movimento, tumulto.",
                "contribution": []
            },
            {
                "id": 1028,
                "title": "Que ratiada!",
                "description": "individuo \"ratão\" que fez alguma \"bragerada\". Ex: mas que ratiaaada!",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/113123660"
                ]
            },
            {
                "id": 678,
                "title": "Quebra-costela",
                "description": "Expressão comumente utilizada pelos gaúchos como sinônimo de abraço. \"Manda um quebra-costelas lá praquele xiru véio!\"",
                "contribution": []
            },
            {
                "id": 759,
                "title": "Quebra mola",
                "description": "Lombada em via pública. ",
                "contribution": []
            },
            {
                "id": 212,
                "title": "Quebreira",
                "description": "Moleza, preguiça, lassidão, lombeira.",
                "contribution": []
            },
            {
                "id": 571,
                "title": "Queimar o assado",
                "description": "Atrasar - se; dormir demais. Queimei o assado hoje, cheguei meia hora atrasado!",
                "contribution": []
            },
            {
                "id": 213,
                "title": "Queixada",
                "description": "Variedade de porco do mato existente no Rio Grande do Sul. Também significa maxilar inferior.",
                "contribution": []
            },
            {
                "id": 967,
                "title": "Quem atolou o burro que puxe a carroça",
                "description": "Expressão usada quando alguém, por trapalhada sua, acaba atrapalhando os outros.",
                "contribution": []
            },
            {
                "id": 214,
                "title": "Quengo",
                "description": "Homem sabido, astuto.",
                "contribution": []
            },
            {
                "id": 691,
                "title": "Quentucho",
                "description": "Quente, para espantar o frio, aquecer, de queimar os beiços.\n\nTambém se usa para definir algo que seja interessante, legal, bom: Quentucho!",
                "contribution": [
                    "Pelando de quente"
                ]
            },
            {
                "id": 444,
                "title": "Queque",
                "description": "Pronuncia-se Quéque - Bolo inglês",
                "contribution": [
                    "Queque, bolo inglês... vem de 'cake'"
                ]
            },
            {
                "id": 458,
                "title": "qüera",
                "description": "Homem, gaúcho, gaudério.",
                "contribution": []
            },
            {
                "id": 293,
                "title": "querência",
                "description": "lugar ou paragem onde o animal assiste de ordinário ao pasto, ou onde foi criado. o mesmo que pago ou lugar; lugar onde alguém nasceu ou se criou. ",
                "contribution": []
            },
            {
                "id": 215,
                "title": "Querudo",
                "description": "Forte, valente, respeitado, temido.",
                "contribution": []
            },
            {
                "id": 216,
                "title": "Quibebe",
                "description": "Pirão de abóbora.",
                "contribution": []
            },
            {
                "id": 826,
                "title": "Quilina",
                "description": "Os pelos compridos do cavalo, que ficam na parte superior do seu pescoço. Ex: Meu pai dizia: - segura nas quilinas para não cair...",
                "contribution": [
                    "Meu pai usava quilina pra falar do cabelo tb. Escutávamos direto: \"Já penteou essas quilinas hj?\""
                ]
            },
            {
                "id": 218,
                "title": "Quimbombô",
                "description": "Quiabo.",
                "contribution": []
            },
            {
                "id": 886,
                "title": "Quintal",
                "description": "Como sinônimo de pátio, parte dos fundos do terreno da casa, ajardinado ou não, com árvores frutíferas e criação de galinhas em local urbanizado.",
                "contribution": []
            },
            {
                "id": 219,
                "title": "Quipoqué",
                "description": "Iguaria de feijão partido e cozido com diversos temperos.",
                "contribution": []
            },
            {
                "id": 220,
                "title": "Quitute",
                "description": "Comida especial, fora do trivial.",
                "contribution": []
            },
            {
                "id": 221,
                "title": "Rabada",
                "description": "A carne e o osso da parte superior do rabo da rês.",
                "contribution": []
            },
            {
                "id": 222,
                "title": "Rabioscas",
                "description": "Rabiscos, letras mal feitas.",
                "contribution": []
            },
            {
                "id": 944,
                "title": "Raia",
                "description": "Linha. Palavra proveniente do espanhol, como tantas outras faladas no Rio Grande. Ex: A \"bulita\" de gude passou da raia!",
                "contribution": []
            },
            {
                "id": 1016,
                "title": "Ralhar",
                "description": "Xingar, ou como se diz lá no Brasil, \"dar sermão\". Ex.: \"Minha mãe ralhou comigo hoje porque eu chutei a bola no vidro da janela.\"",
                "contribution": []
            },
            {
                "id": 392,
                "title": "Rancho",
                "description": "Compra de itens alimentícios feita por famílias gaúchas na quantidade suficiente para cerca de 30 dias. Compra do mês.",
                "contribution": []
            },
            {
                "id": 932,
                "title": "Ratão",
                "description": "Palavra para definir alguém que pisa na bola, que faz algo de errado.",
                "contribution": []
            },
            {
                "id": 650,
                "title": "Rateada",
                "description": "Ato de vacilar, fazer algo errado, cometer um deslize. \"Bah, meu, que rateada!\"",
                "contribution": []
            },
            {
                "id": 223,
                "title": "Realengo",
                "description": "Sem dono, público.",
                "contribution": []
            },
            {
                "id": 224,
                "title": "Rebenque",
                "description": "Chicote curto, com o cabo retovado, com uma palma de couro na extremidade. Pequeno relho.",
                "contribution": []
            },
            {
                "id": 225,
                "title": "Reboldosa",
                "description": "Desordem, alvoroço, estrupício, barulho, trabalhos. O mesmo que rebordosa.",
                "contribution": []
            },
            {
                "id": 345,
                "title": "Rebuliço",
                "description": "Confusão causada devido algum desentendimento (confusão, revolta, briga)",
                "contribution": []
            },
            {
                "id": 226,
                "title": "Recuerdo",
                "description": "Lembrança, recordação.",
                "contribution": []
            },
            {
                "id": 227,
                "title": "Récula",
                "description": "Conjunto de bandidos, desordeiros.",
                "contribution": []
            },
            {
                "id": 316,
                "title": "Rédeas",
                "description": "Correia presa ao freio do animal de tiro ou de montaria, e que o cavaleiro segura nas mãos ao cavalgar; brida ",
                "contribution": []
            },
            {
                "id": 1032,
                "title": "Redevu",
                "description": "Briga, balbúrdia, bochincho, reunião que acaba mal. Derivado do francês Rendez-vous (reunião)",
                "contribution": []
            },
            {
                "id": 806,
                "title": "Redomão",
                "description": "Animal que foi mal domado",
                "contribution": []
            },
            {
                "id": 1132,
                "title": "Reinando",
                "description": "Reinando, expressão usada quando se quer definir uma pessoa quando ela esta incomodando muito.\n\n'' Essa guria ta reinando hoje! ''",
                "contribution": []
            },
            {
                "id": 490,
                "title": "Relampejando",
                "description": "Trovejando",
                "contribution": []
            },
            {
                "id": 947,
                "title": "Relampiar",
                "description": "Também chamado \"relampeio\". É o aparecimento de relâmpagos, que no português padrão seria \"relampejar\". Ex: Bah, mas como tá relampiando lá fora heim, prenda?",
                "contribution": []
            },
            {
                "id": 555,
                "title": "relho",
                "description": "Tipo de chicote usado pelos gaúchos para bater nos cavalos, bois e outros animais, ou até mesmo para brigar com outras pessoas. Na maioria das vezes esse instrumento é ou era usado sem violência, apenas para incentivar os animais.",
                "contribution": [
                    "Já fiz comentário."
                ]
            },
            {
                "id": 593,
                "title": "Rengo",
                "description": "Aquele que está com a perna machucada.",
                "contribution": []
            },
            {
                "id": 773,
                "title": "Rengueando",
                "description": "Caminhar puxando uma perna devido a algum ferimento ou má-formação.",
                "contribution": []
            },
            {
                "id": 397,
                "title": "Renguear",
                "description": "Deixar manco; Ex. Hoje está frio de renguear cusco.",
                "contribution": [
                    "Caminhando sobre a geada, os cuscos (cães) costumam levantar alternadamente, um dos membros para aliviar a dormência causada pelo frio. Quando levantam um pata ficam rengueando e quando for uma das mãos, ficam mancos."
                ]
            },
            {
                "id": 547,
                "title": "Repontar",
                "description": "Tocar o gado por diante de um lugar para outro.",
                "contribution": []
            },
            {
                "id": 607,
                "title": "Resbalar",
                "description": "Derivação de \"resvalar\" e sinônimo de \"escorregar\".\n\nAcredita-se que a derivação tenha acontecido devido a proximidade de nossas terras aos povos de descendência espanhola e da influência destes sobre nossa cultura.\n\nNa língua espanhola o som do \"b\" é frequentemente confundido com o som do \"v\", e vice versa. O comum engano linguístico foi apropriado à ponto de tornar-se uma nova palavra.",
                "contribution": []
            },
            {
                "id": 677,
                "title": "retirar",
                "description": "...",
                "contribution": [
                    "Vou entrar atrás dessa bicha. (igual a entrar no fim da fila)"
                ]
            },
            {
                "id": 857,
                "title": "Retoço",
                "description": "Festa; bagunça; esculhambação.",
                "contribution": []
            },
            {
                "id": 353,
                "title": "Revesgueio",
                "description": "De lado, de canto de olho, de atravessado... Fulana me olhou de revesgueio no baile....Bati na bola meio de revesgueio",
                "contribution": []
            },
            {
                "id": 694,
                "title": "Revessa",
                "description": "Lugar abrigado do vento.",
                "contribution": []
            },
            {
                "id": 303,
                "title": "Rincão",
                "description": "Porção de campo naturalmente cercado de mato. Lugar muito abrigado. Trecho de campo onde há arroio. Recanto formado por acidente natural",
                "contribution": []
            },
            {
                "id": 228,
                "title": "Riscada",
                "description": "Movimento rápido a cavalo, disparada.",
                "contribution": []
            },
            {
                "id": 980,
                "title": "Roça",
                "description": "significado: campo, lavoura, plantação.\nex: fui trabalhar na roça hoje.",
                "contribution": []
            },
            {
                "id": 229,
                "title": "Rodela",
                "description": "Mentira, patranha.",
                "contribution": []
            },
            {
                "id": 453,
                "title": "rodido",
                "description": "Medroso, incapaz, se diz de quem não consegue fazer determinada tarefa EX. Tu é um rodido mesmo, hehehe",
                "contribution": []
            },
            {
                "id": 855,
                "title": "Rojeira",
                "description": "Utensílio uasdo para guiar os bois na carreta, feita de couro cru ou de corda de linho.",
                "contribution": []
            },
            {
                "id": 230,
                "title": "Rufião",
                "description": "Cavalo inteiro destinado à reprodução. Garanhão pastor. Figuradamente, indivíduo dado a namoros, femeeiro.",
                "contribution": []
            },
            {
                "id": 231,
                "title": "Saberete",
                "description": "Sabichão.",
                "contribution": []
            },
            {
                "id": 232,
                "title": "Sacana",
                "description": "Indivíduo sem caráter. Também significa indivíduo trocista.",
                "contribution": []
            },
            {
                "id": 233,
                "title": "Saluço",
                "description": "Forma antiga e popular de soluço.",
                "contribution": []
            },
            {
                "id": 501,
                "title": "Samoco",
                "description": "Boca aberta, bocó, tapado, tonto, troxa",
                "contribution": [
                    "Samoco, paroxítona. Falado no meu querido Caibaté, coração missioneiro!!!",
                    "usava muito esta palavra lá no meu pago quando era gurizote."
                ]
            },
            {
                "id": 897,
                "title": "Sampar",
                "description": "Enfiar, fincar... Ex: \"Te sampo minha adaga\".",
                "contribution": []
            },
            {
                "id": 725,
                "title": "Sanga",
                "description": "Pequeno curso de água.",
                "contribution": []
            },
            {
                "id": 234,
                "title": "Sangado",
                "description": "Preso na sanga. Enfezado, raquítico.",
                "contribution": []
            },
            {
                "id": 809,
                "title": "Santo do pau oco",
                "description": "Quem se faz de santo(a), que tentar parecer bom, mas no fundo é um falsário. ",
                "contribution": []
            },
            {
                "id": 1022,
                "title": "Saracotear",
                "description": "Fazer bagunça, não parar quieto. Ex.: \"Esse guri não pára de saracotear essa noite.\"",
                "contribution": []
            },
            {
                "id": 649,
                "title": "Sarna pra se coçar",
                "description": "Situação que poder gerar confusão. \"Tu tá é procurando sarna pra se coçar\". Procurando encrenca, incomodação.",
                "contribution": []
            },
            {
                "id": 692,
                "title": "Saudade da cadeia",
                "description": "Significa que você não esta com vontade de fazer nada, ficar na moleza,comer, beber, dormir e não pagar.",
                "contribution": []
            },
            {
                "id": 538,
                "title": "Se afeitar",
                "description": "Fazer a  barba",
                "contribution": []
            },
            {
                "id": 1107,
                "title": "Se faz de salame",
                "description": "O termo completo é 'se faz de salame pra ser comido em rodelas'. Refere-se ao indivíduo que finge não ser com ele, ou não saber do que se trata. Sinônimos: falso, mentiroso.",
                "contribution": []
            },
            {
                "id": 524,
                "title": "Se fazer",
                "description": "[prep + v. tr.] Ato de ser omisso, tímido, insuficiente, decepcionante, dúbio, não confiável, não cumpridor, etc. Entende-se que o termo é uma redução de outras expressões como \"se fazer de leitão\", que têm o mesmo significado. (ex.: Ele já tem o dinheiro, mas está se fazendo para pagar o que me deve.)",
                "contribution": []
            },
            {
                "id": 761,
                "title": "se foi a gata com a cinta",
                "description": "não tem mais volta; não tem mais o que fazer",
                "contribution": []
            },
            {
                "id": 912,
                "title": "Se fresqueá",
                "description": "Se fazer louco, marcar passo, vacilar. ",
                "contribution": []
            },
            {
                "id": 706,
                "title": "Se pah",
                "description": "Talvez, pode ser. Ex.: Se pah vamos ao shopping.",
                "contribution": []
            },
            {
                "id": 373,
                "title": "Se puchar",
                "description": "[pron. indef. + v. int] Dar o máximo de si, se empenhar. 2. Surpreender.\n(ex.: Bah, eu tive que me puchar pra dar conta do trabalho acumulado.)",
                "contribution": []
            },
            {
                "id": 570,
                "title": "Se puxar",
                "description": "Esforçar-se; dedicar-se a algo. Me puxei para terminar a prova na hora.",
                "contribution": []
            },
            {
                "id": 539,
                "title": "Se sumiu",
                "description": "Desapareceu, foi embora",
                "contribution": []
            },
            {
                "id": 525,
                "title": "Sefazol",
                "description": "[adj.] Quem se faz [procura por: \"se fazer\"]. (ex.: Ele é um baita de um sefazol; já tem o dinheiro mas não quer pagar o que me deve.)",
                "contribution": []
            },
            {
                "id": 983,
                "title": "Semostração",
                "description": "semostração = exibição; demonstração de alguma habilidade ou de algum pertence de muita qualidade. Ex: Andava de pé sobre a sela numa semostração que todos aplaudiam.",
                "contribution": []
            },
            {
                "id": 235,
                "title": "Senador",
                "description": "Cavalo muito velho.",
                "contribution": []
            },
            {
                "id": 236,
                "title": "Sequilho",
                "description": "Rosquinha de farinha de trigo, seca, revestida de açúcar cristalizado.",
                "contribution": []
            },
            {
                "id": 237,
                "title": "Serigaita",
                "description": "Mulher muito conversadeira, rampeira, regateira, escandalosa, buliçosa. O mesmo que sirigaita.",
                "contribution": []
            },
            {
                "id": 598,
                "title": "Serração",
                "description": "Nevoeiro, normalmente pela manhã, em alguns casos se extende por horas, dependendo da humidade e da ausensia de vento .\n\nExemplo: A cidade amanheceu debaixo de serração",
                "contribution": []
            },
            {
                "id": 1041,
                "title": "Sesteada",
                "description": "Descansar; dormir ao sol; ato de dormir a tarde.",
                "contribution": [
                    "sestiada",
                    "infarosa"
                ]
            },
            {
                "id": 238,
                "title": "Sestear",
                "description": "dormir depois do almoço",
                "contribution": []
            },
            {
                "id": 239,
                "title": "Sílbido",
                "description": "Assobio.",
                "contribution": []
            },
            {
                "id": 497,
                "title": "Sinaleira",
                "description": "Semáforo. Ex.: Não me passa essa SINALERA tchê, ta fechada!",
                "contribution": []
            },
            {
                "id": 612,
                "title": "Sirigaita.",
                "description": "Mulher assanhada, sem modos, oferecida...",
                "contribution": []
            },
            {
                "id": 323,
                "title": "Soga",
                "description": "Corda feita de couro, ou de fibra vegetal, ou ainda de crina de animal, utilizada para prender o cavalo à estaca ou ao pau-de-arrasto, quando é posto a pastar. Corda de couro torcido ou trançado, que liga entre si as pedras das boleadeiras.",
                "contribution": []
            },
            {
                "id": 240,
                "title": "Solavanco",
                "description": "Baque da carreta nos acidentes da estrada.",
                "contribution": []
            },
            {
                "id": 797,
                "title": "Solear",
                "description": "Tomar um sol. Quando esta muito frio em casa, por exemplo, e você vai para fora para se esquentar no sol.",
                "contribution": []
            },
            {
                "id": 486,
                "title": "Sorro",
                "description": "(do espanhol zorro)= raposa. Diz-se também da pessoa matreira, velhaca, sorrateira.",
                "contribution": []
            },
            {
                "id": 541,
                "title": "Sumanta",
                "description": "Apanhar. Tomar um pau. Surra. ",
                "contribution": []
            },
            {
                "id": 339,
                "title": "tá de arreganho",
                "description": "tá de brincadeira",
                "contribution": [
                    "Também usado para expressar o casal que está flertando, paquerando"
                ]
            },
            {
                "id": 334,
                "title": "Tá louco!",
                "description": "Pronuncia-se “tá loco!”. \nExpressão de espanto ou desapontamento, dependendo do contexto que está sendo empregada. Usada também para chamar atenção.\n\"Tá loco! Que jogão de bola!\"\n\"Taaaaá Louco! Que perda irreparável\"\n\"Tá loco! Fulano\"\n Expressão muito usada na região do Médio Uruguai.",
                "contribution": []
            },
            {
                "id": 756,
                "title": "Tabacudo",
                "description": "Pessoa otária, sem noção das coisas, \"boca aberta\" imbecil.\nEi tabacudo !! cuidado pra não derrubar essa lata de tinta !!",
                "contribution": []
            },
            {
                "id": 506,
                "title": "Tacanho",
                "description": "Tosco, ignorante, panaca, de pouco conhecimento.",
                "contribution": []
            },
            {
                "id": 642,
                "title": "Taipa",
                "description": "1.Represa de leivas, nas lavouras de arroz. 2.Cerca de pedra, na região serrana. 3.Tapado, burro, ignorante.\n\" É um taipa mesmo!\"",
                "contribution": [],
                "sounds": [
                    "https:\/\/api.soundcloud.com\/tracks\/111022282"
                ]
            },
            {
                "id": 324,
                "title": "TALAGAÇO",
                "description": "quando um gaucho, convida o outro para tomar um gole de cachaça.\n- dá pelo menos um \"talagaço\" ai.\n- deixa eu dar um \"talagaço\".",
                "contribution": []
            },
            {
                "id": 724,
                "title": "Talho",
                "description": "Ferimento, corte.\nEx: O guri levou um talho no braço.",
                "contribution": []
            },
            {
                "id": 241,
                "title": "Taludo",
                "description": "Crescido, grande, desenvolvido.",
                "contribution": []
            },
            {
                "id": 242,
                "title": "Tambo",
                "description": "Estábulo onde se ordenham as vacas para a venda de leite.",
                "contribution": []
            },
            {
                "id": 817,
                "title": "Tamueiro",
                "description": "Utensílio usado pelos carreteiros para ligar os bois à carreta. Feita de couro.",
                "contribution": []
            },
            {
                "id": 807,
                "title": "Tança",
                "description": "Aquele que cometeu uma gafe, esqueceu algo, se meteu em alguma encrenca.",
                "contribution": []
            },
            {
                "id": 928,
                "title": "Tanso",
                "description": "Distraído, tolo, trapalhão.\nEx.: João passou em frente à prenda amada, ela lhe dirigiu um olhar interessado, mas ele não a viu. É um tanso mesmo.",
                "contribution": []
            },
            {
                "id": 941,
                "title": "Tapado de carrapicho",
                "description": "Cheio de problemas.",
                "contribution": []
            },
            {
                "id": 243,
                "title": "Tapeio",
                "description": "Tapeação, engano, embuste.",
                "contribution": []
            },
            {
                "id": 946,
                "title": "Tapera",
                "description": "Casa ou qualquer construção velha e abandonada.",
                "contribution": []
            },
            {
                "id": 369,
                "title": "tás tolo, istepô",
                "description": "Ó, lhó, lhó, rapagi, tás tolo, istepô, intiquento, miserento,digraçado!\n",
                "contribution": []
            },
            {
                "id": 494,
                "title": "Taura",
                "description": "Diz-se do indivíduo valente, guapo, arrojado, destemido, valoroso, forte",
                "contribution": []
            },
            {
                "id": 603,
                "title": "Tchê",
                "description": "Reza a lenda que deriva do termo Tupi Guarani Chê, que significa, meu, minha, com relação de pertencimento, e é entendido como sinonimo de \"companheiro\" ou \"amigo\". É utilizado como interjeição isoladamente ou em conjunto com outras palavras.",
                "contribution": [
                    "Na região pampeana da bacia do rio da Prata, encontram-se dois dos principais troncos idiomáticos indígenas da América do Sul.\nEm tupi-guarani, \"tchê\" significa \"meu\". Ou seja, meu amigo, meu irmão, meu velho (\"tchê-ru\").\nEm quêchua, \"tchê\" significa \"gente\". Assim, por exemplo, o povo \"mapuche\", que significa \"gente valente\", \"gente de bravura\".\nOs dois significados indígenas se mesclaram no linguajar pampeano, falando-se regularmente no Uruguai, na Argentina, no Paraguai e, bem menos, no Chile e na Bolívia. Além obviamente, do sul do Brasil.\nEssa expressão aparece fortemente entre a gente do campo, onde a sobrevivência de expressões indígenas é muito mais forte.\nSe fosse latim, os cola-fina da cidade falariam... Mas não usam a expressão e ainda a recriminam como deseducada."
                ]
            },
            {
                "id": 448,
                "title": "Tchê Loco",
                "description": "1: Interjeição. chamamento utilizado para homens.\n\n2: Expressão para demonstrar surpresa e espanto.",
                "contribution": []
            },
            {
                "id": 394,
                "title": "Tchó",
                "description": "Igual ao Tchê, muito falado na região de Caxias do Sul.",
                "contribution": []
            },
            {
                "id": 355,
                "title": "Tchuco",
                "description": "Bêbado.",
                "contribution": []
            },
            {
                "id": 681,
                "title": "Te arranca",
                "description": "Sinônimo de mexa-se. \nPor exemplo, te arranca daí e vem logo.\n\nPode ser usado para o verbo levantar, sair, etc.",
                "contribution": []
            },
            {
                "id": 685,
                "title": "Te arremanga e vem",
                "description": "Para que o indivíduo vá rápido, de qualquer jeito, a todo custo, ",
                "contribution": []
            },
            {
                "id": 358,
                "title": "Te larguei pras cobra!",
                "description": "Usado quando alguém faz ou fala algo de que tu discorda. Tipo, teu amigo fica com alguém que tu considera feio, daí tu fala: Ba, te larguei pras cobra!\nE não se pode falar pras cobras, é sem o s mesmo, para ser fiél ao modo com que a expressão sempre foi empregada =]",
                "contribution": []
            },
            {
                "id": 699,
                "title": "Te liga, bico de luz!",
                "description": "Expressão que se diz para a pessoa se orientar, se focar.",
                "contribution": []
            },
            {
                "id": 1074,
                "title": "te liga cusco",
                "description": "chamar a atenção",
                "contribution": []
            },
            {
                "id": 712,
                "title": "Te manda",
                "description": "Sai daqui, vai embora.",
                "contribution": []
            },
            {
                "id": 244,
                "title": "Tejo",
                "description": "Jogo em que se atiram moedas sobre uma faca cravada no solo.",
                "contribution": []
            },
            {
                "id": 827,
                "title": "Telefone de arreio",
                "description": "Também conhecido como telefone celular.",
                "contribution": []
            },
            {
                "id": 575,
                "title": "Tendél",
                "description": "Confusão, escândalo, bagunça. Exemplo: A cumadre fez um tendél depois que o cumpadre pisou-lhe o pé.",
                "contribution": []
            },
            {
                "id": 904,
                "title": "Tentear",
                "description": "Entreter, enrolar. Exemplo: Não me tenteia morena, que tu é flor cheia de espinho...",
                "contribution": []
            },
            {
                "id": 340,
                "title": "Terça Lidio , depois da chuva !",
                "description": "Uma coisa tratada que nunca será cumprida , a pessoa trata e não cumpre",
                "contribution": []
            },
            {
                "id": 568,
                "title": "Termo",
                "description": "Térmica, recipiente para água quente",
                "contribution": []
            },
            {
                "id": 245,
                "title": "Terreiro",
                "description": "Local sem vegetação ao redor das casas de campanha.",
                "contribution": []
            },
            {
                "id": 731,
                "title": "Teto preto",
                "description": "s.m.\n\nAcontecimento inesperado, fora do padrão.\n\n",
                "contribution": []
            },
            {
                "id": 584,
                "title": "Teu",
                "description": "É uma expressão para se referir à alguém. Em Porto Alegrte falam \"véio\", em São Paulo \"meu\" e em Tapejara \"teu\". Exemplo: E daí teu, beleza? \n\nTambém pode ser usada para repreender alguém  que falou alguma bobagem. Exemplo: \"Ó o teu\" ou \"mas é um teu mesmo.\" A fina flor da grossura.",
                "contribution": []
            },
            {
                "id": 246,
                "title": "Tiorga",
                "description": "Embriaguez, borracheira, bebedeira, carraspana.",
                "contribution": []
            },
            {
                "id": 247,
                "title": "Tirada",
                "description": "Gauchada, agachada, compadrada.",
                "contribution": []
            },
            {
                "id": 592,
                "title": "Tiritando de frio",
                "description": "Quando a pessoa está com muito frio. ",
                "contribution": []
            },
            {
                "id": 978,
                "title": "Tô de balde",
                "description": "Estar sem fazer nada. Variação: tô de valde. \nEx: Tchê, to de balde, vamos fazer alguma coisa?",
                "contribution": []
            },
            {
                "id": 974,
                "title": "Tô verde",
                "description": "Quando ja está com a barriga cheia de tanto tomar chimarrão, não aguenta mais chimarrão.",
                "contribution": []
            },
            {
                "id": 248,
                "title": "Tocaia",
                "description": "Espera, emboscada, espreita ao inimigo ou à caça.",
                "contribution": []
            },
            {
                "id": 832,
                "title": "Tomar um pileque",
                "description": "O mesmo que tomar um porre, embebedar-se...",
                "contribution": []
            },
            {
                "id": 249,
                "title": "Tombo",
                "description": "Prejuízo. “Dar o tombo em alguém” significa causar prejuízo a alguém.",
                "contribution": []
            },
            {
                "id": 760,
                "title": "Topeira",
                "description": "Pessoa mal vista, que não faz as coisas certas, ou cabeça dura",
                "contribution": []
            },
            {
                "id": 945,
                "title": "Tormenta",
                "description": "Temporal. Outra palavra proveniente do espanhol, muito usada pelos mais velhos.",
                "contribution": []
            },
            {
                "id": 588,
                "title": "Toró",
                "description": "Uma chuva extremamente forte. Ex.: Vai cair um baita toró hoje!",
                "contribution": [
                    "temporal",
                    "chuva pra lavar a alma."
                ]
            },
            {
                "id": 1078,
                "title": "torrão",
                "description": "Determinada porção de terra, de acordo com o complemento do termo. Ex.: Torrão Gaúcho = Estado do Rio Grande do Sul ou ainda toda região dos povos gauchos (Rio Grande do Sul, Uruguay, partes da Argentina e Paraguay).",
                "contribution": []
            },
            {
                "id": 943,
                "title": "Torta de gostosa",
                "description": "Uma mulher excepcionalmente curvilínea e atraente.",
                "contribution": []
            },
            {
                "id": 1060,
                "title": "Trampo",
                "description": "Trabalho, emprego.",
                "contribution": []
            },
            {
                "id": 325,
                "title": "Tramposo",
                "description": "Intrometido, trapaceiro, velhaco.",
                "contribution": []
            },
            {
                "id": 643,
                "title": "Tranco",
                "description": "Passo largo, firme e seguro, do cavalo ou do homem. Empurrão. Rapidamente, bruscamente.\n\" Fiz o carro pegar no tranco.\"",
                "contribution": []
            },
            {
                "id": 522,
                "title": "Tranqueira",
                "description": "Muito carro na estrada. Lentidão no trânsito.",
                "contribution": [
                    "Carro velho, sem valor, que anda devagar, que vive estragando e trancando a estrada."
                ]
            },
            {
                "id": 804,
                "title": "Traste",
                "description": "Diz-se da pessoa que incomoda, não serve quando precisamos, de animal, ou de algo em serventia. ",
                "contribution": []
            },
            {
                "id": 565,
                "title": "treco",
                "description": "Treco é simplesmente um objeto. Treco pode ser também expressão para mal súbito.",
                "contribution": [
                    "O problema é tê um treco e pimba!!!"
                ]
            },
            {
                "id": 250,
                "title": "Tremedeira",
                "description": "Tremura, tremor, estertores de moribundo.",
                "contribution": []
            },
            {
                "id": 374,
                "title": "Tremer",
                "description": "1. Tirar sarro, sacanear. (ex.: Eu cai do cavalo e ficaram me tremendo.)",
                "contribution": [
                    "Paulo Ricardo Corrêa; tomei a liberdade de colocar a expressão, que é um verbo, na sua forma infinitiva e colocar um exemplo. Acredito que assim a palavra expressão fica com uma forma mais neutra e padronizada, ficando mais fácil de achar, entender e util"
                ]
            },
            {
                "id": 359,
                "title": "Tri",
                "description": "Muito",
                "contribution": []
            },
            {
                "id": 776,
                "title": "Tri legal",
                "description": "1.Gíria utilizada para definir algo que é muito mais do que legal.",
                "contribution": []
            },
            {
                "id": 954,
                "title": "Trigo limpo",
                "description": "Quando se quer dizer que uma pessoa não tem boa índole;\n\"Ele não é trigo limpo\"",
                "contribution": []
            },
            {
                "id": 1020,
                "title": "Trocentos",
                "description": "Usada pra representar uma quantidade muito grande de alguma coisa, sem especificar. Ex.: \"Não te vejo há trocentos anos.\"",
                "contribution": []
            },
            {
                "id": 332,
                "title": "Troço",
                "description": "Alguma coisa, algo, um negócio. Usado quando a pessoa quer apontar algo mas não sabe oque é. Coisa indefinida.",
                "contribution": []
            },
            {
                "id": 586,
                "title": "Tromba d'água",
                "description": "Temporal, chuva forte. Ex. Hoje vai cair uma tromba d'água.\n",
                "contribution": []
            },
            {
                "id": 711,
                "title": "Tronqueira",
                "description": "Tronco grosso de árvore ex; mais atirado que pica-pau em tronqueira",
                "contribution": []
            },
            {
                "id": 1058,
                "title": "Troteando",
                "description": "1.Sinônimo de andar rápido, andar apressado.\nEx: Perdi o canto e tive que ir troteando para trampo.",
                "contribution": []
            },
            {
                "id": 620,
                "title": "trova",
                "description": "Ato de falar e tentar convencer a outra pessoa da sua idéia.\n\nFalar abobrinhas e fazer com que a pessoa acredite.\n\nPode-se também dizer que seria como um xaveco.\nTambém e um tipo de musica monostrófico tradicional do rio grande do sul",
                "contribution": []
            },
            {
                "id": 749,
                "title": "Trovar",
                "description": "Semelhante a flertar, conquistar. \n\nA pessoa que \"trova\" é chamada de \"trovador\"",
                "contribution": []
            },
            {
                "id": 401,
                "title": "truco",
                "description": "Jogo de baralho",
                "contribution": []
            },
            {
                "id": 676,
                "title": "Trupicar",
                "description": "V. Tropeçar em algo. Desequilibrar-se. Perder o rumo. Aplicação: \"Bah, loco! Dei uma trupicada afú naquela pedra...\"",
                "contribution": []
            },
            {
                "id": 896,
                "title": "Tubuna",
                "description": "Imbecil, tabacudo... Também é uma variedade de abelhas silvestre que produz mel de má qualidade.",
                "contribution": []
            },
            {
                "id": 600,
                "title": "Tuna",
                "description": "cactos, típicos da fronteira oeste, aplica-se numa frase do tipo \"vá se coçar numa tuna\", isto é \"vá embora\" \n",
                "contribution": []
            },
            {
                "id": 554,
                "title": "Tunda",
                "description": "Bater, surra.\nEx: Se tu continuares a me incomodar te darei uma tunda!",
                "contribution": []
            },
            {
                "id": 546,
                "title": "Tunda de laço",
                "description": "Camaçada de pau, sumanta de relho, apanhar.",
                "contribution": [
                    "Quando eu era pequena, minha mãe, mandava que  eu e minhas irmãs fossemos buscar uma vara no fundo do quintal  e ela dizia: 'vou dar uma tunda de laço nessa guria teimosa' !!! "
                ]
            },
            {
                "id": 801,
                "title": "Tungar",
                "description": "Molhar (submergir) alguma coisa em algo líquido. \"Tungar o pão no café\", por exemplo.",
                "contribution": []
            },
            {
                "id": 960,
                "title": "Tupetudo",
                "description": "Chimarrão",
                "contribution": []
            },
            {
                "id": 256,
                "title": "Ué",
                "description": "Interjeição que exprime admiração, espanto.",
                "contribution": []
            },
            {
                "id": 998,
                "title": "Uia!",
                "description": "Interjeição que expressa espanto, surpresa",
                "contribution": []
            },
            {
                "id": 648,
                "title": "Um pé lá e outro cá",
                "description": "Advertência, geralmente usada pelas mães, para avisar a criatura para não se demorar, porque senão vai ter.",
                "contribution": []
            },
            {
                "id": 251,
                "title": "Unhar",
                "description": "Roubar, furtar, surrupiar, levar o que não lhe pertence. Também significa correr, fugir à disparada, azular.",
                "contribution": []
            },
            {
                "id": 257,
                "title": "Untura",
                "description": "Remédio feito com sebo, carvão moído e outros ingredientes, usado para curar as matas dos animais de montaria ou de carga.",
                "contribution": []
            },
            {
                "id": 252,
                "title": "Urco",
                "description": "Diz-se do cavalo grande e belo.",
                "contribution": []
            },
            {
                "id": 255,
                "title": "Urucungo",
                "description": "Cavalo ruim, imprestável.",
                "contribution": []
            },
            {
                "id": 253,
                "title": "Urumbeba",
                "description": "Espécie de tuna, do gênero Cactus.",
                "contribution": []
            },
            {
                "id": 254,
                "title": "Usted",
                "description": "Você. Usado somente na fronteira.",
                "contribution": []
            },
            {
                "id": 841,
                "title": "Vá lamber sabão",
                "description": "Diz-se para uma pessoa que está falando bobagens, incomodando...",
                "contribution": []
            },
            {
                "id": 407,
                "title": "Vá te afumentar",
                "description": "Quando uma pessoa está te enchendo a paciência; o mesmo que \"Vai te catar!\".",
                "contribution": []
            },
            {
                "id": 757,
                "title": "Vá tomar onde as galinhas tomam",
                "description": "Xingamento, desprezo ",
                "contribution": []
            },
            {
                "id": 836,
                "title": "Vai à fava",
                "description": "Sai daqui, não enche a paciência, pára com isso...",
                "contribution": []
            },
            {
                "id": 891,
                "title": "Vai ao gaio (vai ao galho)",
                "description": "Se dar mal ao fazer alguma coisa. Correr risco de perder algo importante (a vida) por causa de ações intencionais que geram risco.\nA expressão foi originada pelos suicídios por enforcamento na região. (\"Fulano foi ao gaio\" = morreu).",
                "contribution": []
            },
            {
                "id": 1010,
                "title": "Vai catá coquinho!",
                "description": "Se diz á pessoa que esta molestando ou insistindo em uma coisa que nao tem fundamento.",
                "contribution": []
            },
            {
                "id": 534,
                "title": "Vanera",
                "description": "[s. f.] Sinônimo de vanerão enquanto dança. 2. [s. f.] Sinônimo de vanerão enquanto estilo musical. [procura por \"vanerão\"]",
                "contribution": []
            },
            {
                "id": 533,
                "title": "Vanerão",
                "description": "[s. m.] Dança de origem alemã desenvolvida no Rio Grande do Sul, onde se tornou uma das danças mais populares do estado. Também pode ser utilizada como sinônimo de vanera. (ex.: Vamos dançar um vanerão?) 2. [s. m.] Estilo musical que acompanha a dança. (ex.: Abre a gaita e toca um vanerão, gaitero bueno.)",
                "contribution": []
            },
            {
                "id": 868,
                "title": "Vão cordiando, indiada",
                "description": "Sirvam-se, vão repondo o prato com mais comida, vão cortando mais churrasco...",
                "contribution": []
            },
            {
                "id": 258,
                "title": "Vaquilhona",
                "description": "Vaca nova que ainda não pariu. Novilha.",
                "contribution": []
            },
            {
                "id": 1080,
                "title": "Varado",
                "description": "Definição: com muita, louco, desesperado.\nEx: o fulano esta \"varado\" de fome.\n\nLocalidade: Porto Alegre\/RS\nAutor: Fabio de Deus",
                "contribution": []
            },
            {
                "id": 327,
                "title": "Vareio",
                "description": "Susto, sova, surra, repreensão.\n\nDiz-se também da derrota vexatória de um time. \"tomou um vareio\" ou uma saraivada. Uma variação possível é \"varei\": que varei tu tomou hoje, hein?",
                "contribution": []
            },
            {
                "id": 259,
                "title": "Varejeira",
                "description": "Mosca que deposita seus ovos nas feridas dos animais, produzindo bicheiras.",
                "contribution": []
            },
            {
                "id": 260,
                "title": "Vareta",
                "description": "Desapontamento, atrapalhação, perturbação, encalistração, encabulação.",
                "contribution": []
            },
            {
                "id": 968,
                "title": "Vazio",
                "description": "O vazio, conhecido fora do Rio Grande do Sul como fraldinha, é um tipo de corte de carne bovina, localizada entre a parte traseira e a costela do animal.",
                "contribution": []
            },
            {
                "id": 261,
                "title": "Velhaco",
                "description": "Diz-se do animal que perde o costume de velhaquear, dar pinotes, corcovear.",
                "contribution": [
                    "Pessoa que não paga suas dívidas."
                ]
            },
            {
                "id": 262,
                "title": "Vergamota",
                "description": "Bergamota.",
                "contribution": []
            },
            {
                "id": 707,
                "title": "Vermelhão",
                "description": "Nome dado ao condimento 'colorau'. Pigmento que se adiciona a comida para dar cor.",
                "contribution": []
            },
            {
                "id": 263,
                "title": "Vespra",
                "description": "Véspera.",
                "contribution": []
            },
            {
                "id": 504,
                "title": "viajou",
                "description": "enluqueceu, pirou",
                "contribution": []
            },
            {
                "id": 264,
                "title": "Vianda",
                "description": "Refeição fornecida a domicílio em marmitas. Marmita.",
                "contribution": []
            },
            {
                "id": 596,
                "title": "Vina",
                "description": "Vina, o mesmo que salsicha! Exemplo: Quero um cachorro quente com duas \"vinas\"!",
                "contribution": []
            },
            {
                "id": 266,
                "title": "Viso",
                "description": "Saia de baixo.",
                "contribution": []
            },
            {
                "id": 844,
                "title": "Viva o luxo e encolha o bucho",
                "description": "Mesmo que não tenha o que comer, mostre seu perfil em grande estilo, nunca perca a pose...",
                "contribution": []
            },
            {
                "id": 265,
                "title": "Vivente",
                "description": "Aplic. Saudação.Termo comumente usado para se dirigir a uma pessoa que está na roda ou se aproxima da mesma. Ex : Te aprochega vivente!! ",
                "contribution": []
            },
            {
                "id": 595,
                "title": "Voar as tranças",
                "description": "Sair correndo, andar rápido, com pressa!!  Exemplo:(a) Voei as trança atrás de um laço novo!  (b) A menina voou as trança pra pegar o brinquedo novo!",
                "contribution": []
            },
            {
                "id": 995,
                "title": "Vortiada",
                "description": "Passeio",
                "contribution": []
            },
            {
                "id": 267,
                "title": "Vozerio",
                "description": "Vozeria, vozearia, vozeada, clamor de muitas vozes juntas.",
                "contribution": []
            },
            {
                "id": 268,
                "title": "xamixunga",
                "description": "Pessoa pegajosa, que não desgruda.",
                "contribution": []
            },
            {
                "id": 269,
                "title": "Xepa",
                "description": "Comida.",
                "contribution": []
            },
            {
                "id": 270,
                "title": "Xerenga",
                "description": "Faca velha, ordinária, ruim.",
                "contribution": []
            },
            {
                "id": 271,
                "title": "Xereta",
                "description": "Conversador, intrometido, bisbilhoteiro, importuno, novidadeiro, leva-e-traz, bajulador, engrossador.",
                "contribution": []
            },
            {
                "id": 272,
                "title": "Xi!",
                "description": "Interjeição que expressa surpresa, pasmo, horror.",
                "contribution": []
            },
            {
                "id": 273,
                "title": "Ximbo",
                "description": "Cavalo cujo dono não se conhece.",
                "contribution": []
            },
            {
                "id": 274,
                "title": "Xingar",
                "description": "Descompor, injuriar, dizer desaforo.",
                "contribution": []
            },
            {
                "id": 507,
                "title": "xirú",
                "description": "Expressão usada para se referir a algum indivíduo.\n\n\"Xiru\" é uma palavra de origem indígena (Guarani) e que significa amigo, podendo também ser sinônimo de forte e corajoso.",
                "contribution": [
                    "eu achava que era para pessoas com mais idade"
                ]
            },
            {
                "id": 740,
                "title": "Xis",
                "description": "Tradicional lanche vendido no RS, normalmente composto de algum tipo de carne, tomate, alface, queijo, milho e ervilha. Aceita variações.",
                "contribution": []
            },
            {
                "id": 445,
                "title": "Xisme",
                "description": "Confusão., ajuntamento , reunião de pessoas palavra tipica da Fronteira Oeste",
                "contribution": []
            },
            {
                "id": 1017,
                "title": "Xispar",
                "description": "Sair rapidamente. Ex.: \"Xispa daqui, índio véio, senão vai fechar a peleia.\"",
                "contribution": []
            },
            {
                "id": 864,
                "title": "Xixo",
                "description": "Churrasquinho picado de palito, ou espeto com diferentes tipos de carne, cebola e tomate assados. ",
                "contribution": [
                    "nao só falo como gosto de comer"
                ]
            },
            {
                "id": 275,
                "title": "Xubrega",
                "description": "Diz-se do indivíduo insignificante, de animal ordinário, de coisa sem valor.",
                "contribution": [
                    "uso como xumbrega",
                    "uso como xumbrega"
                ]
            },
            {
                "id": 276,
                "title": "Xucrice",
                "description": "Qualidade de animal ou de indivíduo xucro. Grosseria. Falta de educação.",
                "contribution": []
            },
            {
                "id": 277,
                "title": "Xucrismo",
                "description": "O mesmo que xucrice.",
                "contribution": []
            },
            {
                "id": 429,
                "title": "XUCRO",
                "description": "(adjetivo) Animal bravo e indomado; pessoa tosca, rude, sem modos. \"Te afasta que o bagual é XUCRO\"",
                "contribution": []
            },
            {
                "id": 278,
                "title": "Zambo",
                "description": "Desnorteado, tonto, aparvalhado, atoleimado.",
                "contribution": []
            },
            {
                "id": 279,
                "title": "Zarro",
                "description": "Incômodo, maçante, difícil de fazer, chato.",
                "contribution": []
            },
            {
                "id": 280,
                "title": "Zorro",
                "description": "O mesmo que sorro ou guaraxaim. Figuradamente, a pessoa manhosa, atilada, disfarçada, velhaca.",
                "contribution": []
            },
            {
                "id": 281,
                "title": "Zunir",
                "description": "Ir-se apressadamente.",
                "contribution": []
            },
            {
                "id": 282,
                "title": "Zura",
                "description": "Diz-se da pessoa sovina.",
                "contribution": []
            },
            {
                "id": 286,
                "title": "Zurra",
                "description": "Trabalhar intensamente com muito afinco. O mesmo que dizer asneiras, tolices.",
                "contribution": []
            },
            {
                "id": 283,
                "title": "Zurrapa",
                "description": "Ruim, ordinário, de má qualidade.",
                "contribution": []
            }
        ];

    }

}
