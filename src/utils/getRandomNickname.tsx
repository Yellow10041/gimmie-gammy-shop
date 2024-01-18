const getRandomNickname = () => {
  let arrayNicknames = [
    'Rocketeessssr',
    'NoobTuber',
    'plasma_prowler',
    'pixelpirate',
    'nova_ninja',
    'dat_boi',
    'ninja_42Shadow',
    'f1restormArch3r',
    'steelserpent',
    'B3_4rcher',
    'quokkaQuantum',
    'quantum_quakeX',
    'pepemaster69',
    'blazemaster',
    'ThunderstormSlayer',
    'cosmicgamer',
    'Luckydemon',
    'potato_aim',
    'Br3ak3r',
    'noobPro',
    'ice_blade_warrior',
    'xX_ShadowSl4y3r_69_Xx',
    'quantumXstar',
    'atomic_blaster',
    'Snowyeti',
    '3lectricBl4d3',
    'teabagchampion',
  ]
  let randomNickname =
    arrayNicknames[Math.floor(Math.random() * arrayNicknames.length)]

  return randomNickname
}

export default getRandomNickname
