import React from 'react'

export const loadState = () => {
    try {
      const st = localStorage.getItem('todos');
      if (st === null) {
        return undefined;
      }
      return JSON.parse(st);
    } catch (err) {
      return undefined;
    }
}; 

export const saveState = (state) => {
    try {
      const st = JSON.stringify(state);
      localStorage.setItem('todos', st);
    } catch {
      return null;
    }
};


