const platforms = Object.keys(system);
    platforms.forEach(key => {
      system[key] = (system[key])
        .lists.map(runner => ({ ...runner, registedStatus: RegistedStatus.pending }));
    });