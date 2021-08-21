import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Drink } from 'interfaces/Drink';

interface DrinkContextData {
  drinks: Drink[];
  calcPricePerLiter: (drink: Drink) => number;
  addDrink: (drink: Drink) => Promise<void>;
  updateDrink: (drink: Drink) => Promise<void>;
  removeDrink: (drink: Drink) => Promise<void>;
  reset: () => Promise<void>;
}

const DrinkContext = createContext<DrinkContextData>({} as DrinkContextData);

const DrinkProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    async function loadDrinks() {
      const data = await AsyncStorage.getItem('@drinks');

      if (data) {
        setDrinks(JSON.parse(data));
      }
    }

    loadDrinks();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@drinks', JSON.stringify(drinks));
  }, [drinks]);

  function calcPricePerLiter(drink: Drink) {
    return (drink.price / drink.volume) * 1000;
  }

  const addDrink = useCallback(async drink => {
    setDrinks(currentDrinks => [
      { id: uuidv4(), pricePerLiter: calcPricePerLiter(drink), ...drink },
      ...currentDrinks,
    ]);
  }, []);

  const updateDrink = useCallback(async drink => {
    setDrinks(currentDrinks =>
      currentDrinks.map(d =>
        d.id === drink.id
          ? { pricePerLiter: calcPricePerLiter(drink), ...drink }
          : d,
      ),
    );
  }, []);

  const removeDrink = useCallback(async drink => {
    setDrinks(currentDrinks => currentDrinks.filter(d => d.id !== drink.id));
  }, []);

  const reset = useCallback(async () => {
    setDrinks([]);

    AsyncStorage.setItem('@drinks', JSON.stringify([]));
  }, []);

  return (
    <DrinkContext.Provider
      value={{
        drinks,
        calcPricePerLiter,
        addDrink,
        updateDrink,
        removeDrink,
        reset,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
};

function useDrink(): DrinkContextData {
  const context = useContext(DrinkContext);

  if (!context) {
    throw new Error('useDrink must be used within a DrinkProvider');
  }

  return context;
}

export { DrinkProvider, useDrink };
