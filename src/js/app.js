export function extractSpecialAttacks({ special }) {
    return special.map(attack => ({
      id: attack.id,
      name: attack.name,
      description: attack.description || 'Описание недоступно',
      icon: attack.icon
    }));
  }