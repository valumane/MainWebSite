//skyblock level = Math.floor(membersInfo.leveling.experience/100)


function setLevel(){

    levelFarming = membersInfo.experience_skill_farming;
    levelMining = membersInfo.experience_skill_mining;
    levelCombat = membersInfo.experience_skill_combat;
    levelTaming = membersInfo.experience_skill_taming;
    levelEnchanting = membersInfo.experience_skill_enchanting;
    levelFishing = membersInfo.experience_skill_fishing;
    levelForaging = membersInfo.experience_skill_foraging;
    levelCarpentry = membersInfo.experience_skill_carpentry;
    levelAlchemy = membersInfo.experience_skill_alchemy;
    levelSocial = membersInfo.experience_skill_social2;
    levelRunecrafting = membersInfo.experience_skill_runecrafting
    console.log("initié")
    getAllLevel()
}





function getlevel(catname,catlvl,cap){

    var tmp = catlvl;
    var cpt = 0;
    var eta;
    var progress;
    var tof = 0;
    while(tof == 0){       
        if( (tmp - cap[cpt])>0 ){
            tmp = tmp - cap[cpt]
            cpt++;
        } else {
            tof = 1
        }
    }

    eta = Math.round((Math.floor(tmp)/cap[cpt])*100)+"%"
    progress = Math.floor(tmp)+"/"+cap[cpt]

    console.log(catname+" "+"level:",cpt, " ", progress," ",eta )
    createSkilldiv(catname+"Skill",eta,cpt)
    
    console.log(catname+"Skill",eta)
}

function getAllLevel(){
    getlevel("farming",levelFarming,farmingcap);
    getlevel("mining",levelMining,miningcap);
    getlevel("combat",levelCombat,combatcap);
    getlevel("taming",levelTaming,tamingcap);
    getlevel("enchanting",levelEnchanting,enchantingcap);
    getlevel("fishing",levelFishing,fishingcap);
    getlevel("foraging",levelForaging,foragingcap);
    getlevel("carpentry",levelCarpentry,carpentrycap);
    getlevel("alchemy",levelAlchemy,alchemycap);
    getlevel("social",levelSocial,socialcap);
    getlevel("runecrafting",levelRunecrafting,runecraftingcap);
}
