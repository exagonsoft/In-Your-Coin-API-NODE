import prisma from "../data/prisma.mjs";
import { scrappFormalSourcess, scrappInformalSourcess } from "./scrapValues.mjs";

//******Write Operations*********/
export const saveInformalData = async (data) => {
  try {
    let _lastinFormalExchange = await prisma.inFormalExchange.findFirst({
      orderBy: {
        id: "asc",
      },
    });

    if (!_lastinFormalExchange) {
      let _result = await prisma.inFormalExchange.create({
        data: data,
      });
    } else {
      let _result = await prisma.inFormalExchange.update({
        data: data,
        where: {
          id: _lastinFormalExchange.id,
        },
      });
    }

    return true;
  } catch (error) {
    console.error("💾Error writing to DataBase:", error);
    return false;
  }
};

export const saveformalData = async (data) => {
  try {
    let _lastFormalExchange = await prisma.formalExchange.findFirst({
      orderBy: {
        id: "asc",
      },
    });

    if (!_lastFormalExchange) {
      let _result = await prisma.formalExchange.create({
        data: data,
      });
    } else {
      let _result = await prisma.formalExchange.update({
        data: data,
        where: {
          id: _lastFormalExchange.id,
        },
      });
    }

    return true;
  } catch (error) {
    console.error("💾Error writing to DataBase:", error);
    return false;
  }
};

export const saveForceInformalData = async (data) => {
  try {
    let _lastinFormalExchange = await prisma.inFormalExchange.findFirst({
      orderBy: {
        id: "asc",
      },
    });

    let _result = null;

    if (!_lastinFormalExchange) {
      _result = await prisma.inFormalExchange.create({
        data: data,
      });
    } else {
      _result = await prisma.inFormalExchange.update({
        data: data,
        where: {
          id: _lastinFormalExchange.id,
        },
      });
    }

    return _result;
  } catch (error) {
    console.error("💾Error writing to DataBase:", error);
    return false;
  }
};

export const saveForceformalData = async (data) => {
  try {
    let _lastFormalExchange = await prisma.formalExchange.findFirst({
      orderBy: {
        id: "asc",
      },
    });

    let _result = null;

    if (!_lastFormalExchange) {
      _result = await prisma.formalExchange.create({
        data: data,
      });
    } else {
      _result = await prisma.formalExchange.update({
        data: data,
        where: {
          id: _lastFormalExchange.id,
        },
      });
    }

    return _result;
  } catch (error) {
    console.error("💾Error writing to DataBase:", error);
    return false;
  }
};

//******Read Operations*********/
export const getFormalValuesFromStorage = async () => {
  try {
    let _formalValues = await prisma.formalExchange.findFirst({
      orderBy: {
        id: "asc",
      },
    });

    if(_formalValues){
      return _formalValues;
    }else{
      let _formalData = await scrappFormalSourcess();

      if(!_formalData){
        return false;
      }

      let _result = await saveForceformalData(_formalData);
      return _result;
    }

  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getInFormalValuesFromStorage = async () => {
  try {
    let _informalValues = await prisma.inFormalExchange.findFirst({
      orderBy: {
        id: "asc",
      },
    });

    if(_informalValues){
      return _informalValues;
    }else{
      let _informalData = await scrappInformalSourcess();

      if(!_informalData){
        return false;
      }

      let _result = await saveForceInformalData(_informalData);
      return _result;
    }

  } catch (error) {
    console.log(error);
    return false;
  }
};
