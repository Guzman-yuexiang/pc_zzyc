class SuperTask {
  constructor(parallelCount = 2) {
    // 并行任务数
    this.parallelCount = parallelCount;
    // 任务队列
    this.tasks = [];
    // 正在运行的任务数
    this.runningCount = 0;
  }

  addTask(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({task, resolve, reject});
      this.run();
    });
  }

  run() {
    while (this.runningCount < this.parallelCount && this.tasks.length) {
      const {task, resolve, reject} = this.tasks.shift();
      this.runningCount++;
      Promise.resolve(task()).then(resolve, reject).finally(() => {
        this.runningCount--;
        this.run()
      })
    }
  }
}

export default SuperTask;